# Axia - Premium E-commerce Website

A modern, responsive e-commerce website built with React and Vite, featuring a premium design with glassmorphism effects and smooth animations.

## Features

- **Product Catalog**: Browse products from Fake Store API with custom mapping
- **Search Functionality**: Real-time product search with filtering
- **Shopping Cart**: Add/remove items with persistent cart state
- **User Authentication**: Login/signup with profile management
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Glassmorphism effects, gradients, and smooth animations
- **Category Filtering**: Filter products by category
- **Product Details**: Detailed product pages with images and descriptions

## Tech Stack

- **Frontend**: React 18, React Router DOM
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features (Grid, Flexbox, CSS Variables)
- **API**: Fake Store API for product data
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd axia-ecommerce
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── AuthModal.jsx   # Authentication modal
│   ├── CartDrawer.jsx  # Shopping cart sidebar
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Hero section
│   └── ProductCard.jsx # Product display card
├── context/            # React Context providers
│   ├── CartContext.jsx # Shopping cart state
│   └── UserContext.jsx # User authentication state
├── pages/              # Page components
│   ├── ContactPage.jsx # Contact information
│   ├── HelpPage.jsx    # Help and FAQ
│   ├── Home.jsx        # Homepage
│   ├── ProductDetailPage.jsx # Product details
│   └── ProductsPage.jsx # Main products listing
├── services/           # API services
│   └── api.js          # Fake Store API integration
└── utils/              # Utility functions
    └── productMapper.js # Product data transformation
```

## Features in Detail

### Product Management
- Fetches products from Fake Store API
- Custom product mapping with realistic pricing
- High-quality images from Unsplash
- Category-based organization

### Shopping Cart
- Add/remove products
- Quantity management
- Persistent cart state
- Real-time cart count badge

### User Authentication
- Login/signup functionality
- Profile management
- Social authentication UI (Google, Facebook)
- Form validation

### Search & Filtering
- Real-time search across product titles, categories, and descriptions
- Category-based filtering
- Search results counter
- No results handling

## Deployment

The project is configured for deployment on Vercel with:
- Automatic builds on push
- SPA routing configuration
- Optimized production builds

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.