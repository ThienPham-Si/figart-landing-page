# snowx.md

## Project Structure

```
figart-alchemy/
├── index.html              # Home page
├── signature-works.html    # Signature Works gallery
├── shop.html               # Shop/marketplace links
├── about.html              # About/artist bio
├── contact.html            # Contact form and social links
├── css/
│   └── style.css           # Main stylesheet
├── js/
│   └── main.js             # JavaScript for UI interactions
├── assets/
│   ├── images/             # Brand, gallery, and UI images
│   └── icons/              # Social media and UI icons (SVG preferred)
```

## Technology Choices

- **HTML5**: Static pages for each section
- **CSS3**: Single, responsive, modern stylesheet
- **Vanilla JavaScript**: For UI/UX enhancements (mobile menu, fade-in, etc.)
- **Alpine.js**: Used via CDN for declarative UI state (mobile menu, gallery filters, FAQ toggles)
- **Font Awesome**: For social and UI icons

## Core Pages

- **Home**: Brand intro, featured works, navigation
- **Signature Works**: Filterable gallery by category
- **Shop**: Marketplace links (Etsy, eBay, Amazon)
- **About**: Artist bio, creative statement, process
- **Contact**: Email, social links, contact form, FAQ

## UI/UX

- Clean, modern, and professional
- Responsive (desktop/mobile)
- Subtle hover and fade-in effects
- Consistent header/footer navigation
- Accessible and semantic markup

## Contact Form

- Static form structure
- Submission handled by external service (e.g., Netlify Forms, Formspree) or simulated in JS for demo
- Alpine.js for form state/feedback

## Notes

- All images and icons are placeholders; replace with brand assets as needed
- No backend or build step required; deploy as static files
- Designed for Netlify, GitHub Pages, Vercel, or any static host

## Author

- Project by FigArt Alchemy, 2025