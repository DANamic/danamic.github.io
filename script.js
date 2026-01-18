// Helper function to safely create HTML elements with text content
function createElementWithText(tag, text, className = '') {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = text;
    return element;
}

// Helper function to safely set HTML content (for trusted internal content only)
function setTrustedHTML(elementId, htmlContent) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerHTML = htmlContent;
    }
}

// Load content from JSON and populate the page
async function loadContent() {
    try {
        const response = await fetch('content.json');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();

        // Populate About section (trusted internal content)
        setTrustedHTML('about-text', data.about);

        // Populate Media Coverage section
        const mediaGrid = document.getElementById('media-grid');
        if (data.media && data.media.length > 0) {
            mediaGrid.innerHTML = '';
            data.media.forEach(item => {
                const mediaItem = document.createElement('a');
                mediaItem.className = 'media-item';
                mediaItem.href = item.url || '#';
                mediaItem.target = '_blank';
                mediaItem.rel = 'noopener noreferrer';

                // Create title
                const title = createElementWithText('h3', item.title || '');
                mediaItem.appendChild(title);

                // Create source
                const source = createElementWithText('span', item.source || '', 'source');
                mediaItem.appendChild(source);

                // Create date if present
                if (item.date) {
                    const date = createElementWithText('span', item.date, 'date');
                    mediaItem.appendChild(date);
                }

                // Create description
                const description = createElementWithText('p', item.description || '');
                mediaItem.appendChild(description);

                // Add screenshot if present
                if (item.screenshot) {
                    const img = document.createElement('img');
                    img.src = item.screenshot;
                    img.alt = item.title || '';
                    img.className = 'screenshot';
                    mediaItem.appendChild(img);
                }

                mediaGrid.appendChild(mediaItem);
            });
        }

        // Populate DANAMIC section (trusted internal content)
        setTrustedHTML('danamic-text', data.danamic);

        // Populate Contact section (trusted internal content)
        setTrustedHTML('contact-text', data.contact);

    } catch (error) {
        console.error('Error loading content:', error);
    }
}

// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Load content when page loads
document.addEventListener('DOMContentLoaded', loadContent);
