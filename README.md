# أناقة (Anaqa) — Fashion Salla Theme

A professional fashion ecommerce theme built on **Salla Twilight**, customized for fashion, abaya, clothing, accessories, and lifestyle stores. Supports Arabic and English, mobile-responsive, customizable through theme settings, and optimized for a clean shopping experience.

---

## Author Details

| Field | Value |
|-------|-------|
| Author | Mahmoud Mohamed |
| Support Email | mahmoudhassanx174@gmail.com |
| Alternative Email | ahmedaboyouniscodee@gmail.com |
| Phone / WhatsApp | 01142242076 |
| Industry | Fashion |

---

## Requirements

- Node.js 16+
- npm / pnpm
- Salla Partner account ([salla.partners](https://salla.partners))
- GitHub account
- Salla CLI (`npm install -g @salla.sa/cli`)

---

## Installation

```bash
# 1. Navigate to the theme directory
cd anaqa-theme

# 2. Install dependencies
npm install

# 3. Login to Salla (if not already)
salla login

# 4. Preview the theme
salla theme preview
```

Or use the alias:

```bash
salla theme p
```

---

## Folder Structure

```
anaqa-theme/
├── src/
│   ├── assets/
│   │   ├── images/          # Theme images
│   │   ├── js/              # JavaScript files
│   │   │   └── partials/    # JS partials
│   │   └── styles/          # CSS files (Tailwind)
│   ├── locales/
│   │   ├── ar.json          # Arabic translations
│   │   └── en.json          # English translations
│   └── views/
│       ├── components/
│       │   ├── footer/      # Footer component
│       │   ├── header/      # Header component
│       │   ├── home/        # Homepage sections (hero, categories, benefits, instagram, newsletter)
│       │   └── comments.twig
│       ├── layouts/
│       │   └── master.twig  # Main layout
│       └── pages/
│           ├── blog/        # Blog pages
│           ├── brands/      # Brand pages
│           ├── customer/    # Customer account pages
│           ├── partials/    # Reusable partials (product card)
│           ├── product/     # Product pages
│           ├── cart.twig
│           ├── index.twig   # Homepage
│           ├── loyalty.twig
│           ├── page-single.twig
│           └── thank-you.twig
├── twilight.json            # Theme configuration
├── tailwind.config.js       # Tailwind CSS configuration
├── webpack.config.js        # Webpack configuration
├── postcss.config.js        # PostCSS configuration
├── package.json             # Dependencies
├── .gitignore
└── README.md
```

---

## Customization

The theme includes extensive merchant-customizable settings via the Salla Partners Portal:

### Color Settings
- Primary color
- Accent color (gold/rose gold)
- Button color & text color
- Background color
- Text color

### Header Settings
- Sticky header toggle
- Announcement bar (show/hide + text)
- Dark top navigation

### Hero Section
- Background image
- Title, subtitle, button text & link
- Show/hide text overlay

### Footer Settings
- Dark/light mode
- Store description
- Social media links (Instagram, Snapchat, Twitter, Facebook, TikTok)
- WhatsApp number

### Product Page
- Breadcrumbs toggle
- Add to cart toast notification
- Sticky add to cart on mobile
- Tags visibility

---

## Features

### Homepage Sections
1. **Hero Banner** — Full-width fashion hero with customizable image, text, and CTA
2. **Categories Section** — Grid of fashion categories with overlay
3. **Featured Products** — Using Salla built-in component
4. **New Arrivals** — Latest products section
5. **Best Sellers** — Top-selling products
6. **Fixed Promotional Banner** — Customizable promotional area
7. **Products Slider** — Smooth product carousel
8. **Store Benefits** — Fast shipping, secure payment, easy returns, WhatsApp support
9. **Instagram / Lifestyle Section** — Visual branding grid
10. **Newsletter Section** — Email subscription with CTA

### Design Highlights
- Modern, clean luxury aesthetic
- Elegant product-focused layout
- RTL-first with full LTR support
- Mobile-first responsive design
- Smooth hover effects on product cards
- Premium typography for Arabic & English
- Color scheme: Off White, Soft Beige, Charcoal, Warm Gold accent

### Product Cards
- Clean image ratio with hover zoom
- Controlled name length (line-clamp)
- Clear price with discount display
- Sale/New badges
- Add to cart button on hover (desktop) / always visible (mobile)

### Product Page
- Image gallery
- Variant selection (size, color)
- Tabbed content (description, specs, reviews)
- Trust messages near buy section
- Sticky add to cart bar on mobile
- Related products

### Header
- Sticky header option
- Announcement bar
- Search, wishlist, cart icons
- Mobile hamburger menu with overlay

### Footer
- Store description with social links
- Quick links & policy pages
- Support contact details
- Payment methods icons
- Copyright

---

## Uploading to GitHub

```bash
# 1. Initialize git (if not already)
git init

# 2. Add all files
git add .

# 3. Commit
git commit -m "Initial commit - Anaqa Fashion Theme"

# 4. Create a new repository on GitHub (do NOT add README, .gitignore, or license)

# 5. Link and push
git remote add origin https://github.com/YOUR_USERNAME/anaqa-theme.git
git branch -M main
git push -u origin main
```

> ⚠️ **Important:** Do not commit `node_modules/`, `public/`, or `.env` files. The `.gitignore` is already configured.

---

## Next Steps in Salla Partners

1. Go to [salla.partners/themes](https://salla.partners/themes)
2. Click **Create Theme** or **Import Theme**
3. Connect your GitHub account
4. Select the `anaqa-theme` repository
5. Fill in theme details (icon, name, category)
6. Access **Theme Settings** to configure colors, hero, header, footer
7. Use **Preview** to test with a demo store
8. Screenshots (3+ images, 1366x768)
9. Set pricing (minimum SAR 250)
10. Submit for publication

---

## Local Development

```bash
# Start development with hot reload
salla theme preview

# Build for production
npm run production
# or
npm run prod

# Build for development
npm run development
```

---

## Support

For support or inquiries:

- **Email:** mahmoudhassanx174@gmail.com
- **Alternative Email:** ahmedaboyouniscodee@gmail.com
- **Phone / WhatsApp:** 01142242076

---

## License

MIT License — see the LICENSE file for details.
