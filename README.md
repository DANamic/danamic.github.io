# Danish Lukawski - Personal Portfolio

A simple, elegant static website showcasing Danish Lukawski's professional portfolio, media coverage, and DANAMIC Creative Agency.

## Live Website

Visit: [https://danamic.github.io](https://danamic.github.io)

## Features

- **Clean, Modern Design**: Professional and responsive layout that works on all devices
- **Easy to Update**: All content is managed through a simple `content.json` file
- **Media Coverage Section**: Showcase snippets, screenshots, and snapshots from reputable websites
- **Mobile Responsive**: Optimized for desktop, tablet, and mobile viewing
- **Fast Loading**: Static site with minimal dependencies
- **SEO Optimized**: Proper meta tags for search engines and social sharing

## How to Update Content

All website content can be easily updated by editing the `content.json` file. No coding knowledge required!

### Updating Text Content

Edit the `content.json` file and modify the following sections:

1. **About Section** - Update the `"about"` field with your biography
2. **DANAMIC Section** - Update the `"danamic"` field with information about the agency
3. **Contact Section** - Update the `"contact"` field with contact information

### Adding Media Coverage

To add new media coverage items, add entries to the `"media"` array in `content.json`:

```json
{
  "title": "Article Title",
  "source": "Publication Name",
  "date": "2024",
  "description": "Brief description of the coverage",
  "url": "https://example.com/article",
  "screenshot": "images/screenshot.jpg"
}
```

**Fields:**
- `title`: The headline or title of the media coverage
- `source`: The name of the publication/website
- `date`: Year or date of publication
- `description`: A brief summary of the coverage
- `url`: Link to the original article
- `screenshot`: (Optional) Path to a screenshot image

### Adding Screenshots

1. Create an `images` folder in the root directory
2. Add your screenshot images to this folder
3. Reference them in `content.json` using the path: `"images/filename.jpg"`

## File Structure

```
danamic.github.io/
├── index.html          # Main HTML structure
├── style.css           # Styles and layout
├── script.js           # Dynamic content loading
├── content.json        # Editable content (UPDATE THIS!)
├── images/             # Screenshots and images (create as needed)
└── README.md           # This file
```

## Local Development

To preview the website locally:

1. Simply open `index.html` in your web browser, or
2. Use a local server (recommended for full functionality):

```bash
# Using Python 3
python3 -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js
npx http-server
```

Then visit `http://localhost:8000` in your browser.

## Deployment

This website is automatically deployed via GitHub Pages. Any changes pushed to the main branch will be live within a few minutes.

## Customization

### Changing Colors

Edit the CSS variables in `style.css` under `:root`:

```css
:root {
    --primary-color: #2c3e50;     /* Main dark color */
    --secondary-color: #3498db;    /* Accent blue color */
    --accent-color: #e74c3c;       /* Highlight red color */
}
```

### Modifying Layout

- Edit `index.html` to change the structure
- Edit `style.css` to change the visual design
- Edit `script.js` to modify functionality

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

© 2024 Danish Lukawski. All rights reserved.