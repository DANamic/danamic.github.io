// Load content from JSON and populate the page
async function loadContent() {
    try {
        const response = await fetch('content.json');
        const data = await response.json();

        // Populate About section
        document.getElementById('about-text').innerHTML = data.about;

        // Populate Media Coverage section
        const mediaGrid = document.getElementById('media-grid');
        if (data.media && data.media.length > 0) {
            mediaGrid.innerHTML = '';
            data.media.forEach(item => {
                const mediaItem = document.createElement('a');
                mediaItem.className = 'media-item';
                mediaItem.href = item.url;
                mediaItem.target = '_blank';
                mediaItem.rel = 'noopener noreferrer';

                let content = `
                    <h3>${item.title}</h3>
                    <span class="source">${item.source}</span>
                    ${item.date ? `<span class="date">${item.date}</span>` : ''}
                    <p>${item.description}</p>
                `;

                if (item.screenshot) {
                    content += `<img src="${item.screenshot}" alt="${item.title}" class="screenshot">`;
                }

                mediaItem.innerHTML = content;
                mediaGrid.appendChild(mediaItem);
            });
        }

        // Populate DANAMIC section
        document.getElementById('danamic-text').innerHTML = data.danamic;

        // Populate Contact section
        document.getElementById('contact-text').innerHTML = data.contact;

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
