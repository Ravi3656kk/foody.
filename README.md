# Foody Website Project

Foody is a responsive food delivery landing page built with HTML, CSS, and JavaScript. The project shows a modern food ordering website with hero content, service highlights, popular food cards, cart functionality, customer reviews, app promotion, newsletter signup, and footer links.

## What This Project Does

This project creates a simple front-end food delivery website where users can view food items and add them to a cart. It is designed to work on both desktop and mobile screens.

Main work included in this project:

- Responsive navigation bar with desktop menu and mobile hamburger menu.
- Hero section with food delivery branding and social links.
- Services section explaining how ordering works.
- Popular food menu section with product cards.
- Add to cart feature with cart count, total price, and quantity controls.
- Customer review slider using Swiper.
- Mobile app promotion section.
- Newsletter email input section.
- Footer with menu, company, support, and social links.

## UI Look And Design

The UI uses a food-themed layout with warm colors, bold headings, rounded cards, food images, and clean spacing. The design is made to feel simple, friendly, and easy to scan.

UI style details:

- Red/orange accent color for buttons, logo, and important headings.
- Light yellow background elements for social icons, cart panel, and footer.
- Large hero text with a delivery image.
- Product cards with food images, price, and add to cart buttons.
- Slide-in cart panel from the right side.
- Responsive mobile layout where sections stack vertically.
- Horizontal scrolling product cards on smaller screens.

## Functions Inside The Project

The JavaScript file controls the interactive parts of the website.

Current functions/features:

- Swiper review slider initialization.
- Mobile hamburger menu open and close behavior.
- Add to cart button behavior.
- Cart item count update in the bag icon.
- Cart total price calculation.
- Cart panel open and close behavior.
- Plus and minus buttons for changing item quantity.
- Remove item from cart when quantity becomes zero.
- Empty cart message when no items are selected.

## Project Files

- `index.html` - Main website structure and all page sections.
- `style.css` - Styling, responsive layout, product cards, cart panel, and mobile design.
- `app.js` - Slider, mobile menu, and cart functionality.
- `assets/` - Food images, user images, delivery images, and app image.

## How To Run

Open `index.html` in a browser.

For a local server, you can run:

```bash
python -m http.server 4173
```

Then open:

```text
http://localhost:4173
```

## Responsive Support

The website includes responsive styling for desktop, tablet, and mobile screens. On mobile:

- The desktop menu hides.
- The hamburger menu appears.
- Sections stack vertically.
- Product cards scroll horizontally.
- The cart panel fits inside the screen.
- Newsletter input and buttons stack cleanly.
