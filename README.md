# AJ Abhi Jewels - Enterprise E-commerce Platform

A modern, full-featured jewelry e-commerce website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🌟 Features

### Customer Experience
- **Luxury Design**: Premium UI with gold/platinum color scheme
- **Product Catalog**: Advanced filtering and search capabilities
- **Shopping Cart**: Persistent cart with real-time updates
- **Wishlist**: Save favorite products for later
- **Responsive Design**: Mobile-first approach for all devices
- **Performance Optimized**: <2 second load times with image optimization

### Business Features
- **SEO Optimized**: Structured data and meta tags for better search visibility
- **Analytics Ready**: Google Analytics integration
- **Social Media**: Instagram feed integration
- **Newsletter**: Email subscription system
- **Contact Integration**: Phone, WhatsApp, email support

### Technical Excellence
- **Next.js 14**: Latest App Router with server components
- **TypeScript**: Full type safety across the application
- **Tailwind CSS**: Utility-first CSS with custom design system
- **Framer Motion**: Smooth animations and transitions
- **Zustand**: Lightweight state management
- **Image Optimization**: WebP format with lazy loading

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run the development server**
   ```bash
   npm run dev
   ```

3. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
aj-abhi-jewels/
├── app/                    # Next.js 14 App Router
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Homepage
│   └── providers.tsx     # Context providers
├── components/            # Reusable components
│   ├── ui/               # Base UI components
│   ├── layout/           # Layout components
│   ├── product/          # Product-related components
│   ├── cart/             # Shopping cart components
│   └── home/             # Homepage sections
├── lib/                  # Utility functions
│   ├── utils.ts          # Common utilities
│   └── data.ts           # Mock data
├── store/                # State management
│   ├── cart.ts           # Cart store
│   └── wishlist.ts       # Wishlist store
├── types/                # TypeScript definitions
│   └── index.ts          # Type definitions
└── public/               # Static assets
```

## 🎨 Design System

### Colors
- **Primary Gold**: #D4AF37 (luxury, premium)
- **Platinum**: #E5E4E2 (elegance, sophistication)
- **Diamond White**: #F8F8FF (purity, clarity)
- **Rose Gold**: #E8B4B8 (warmth, romance)

### Typography
- **Headings**: Playfair Display (luxury serif)
- **Body Text**: Inter (modern sans-serif)
- **Luxury Text**: Cormorant Garamond (elegant serif)

## 🛒 Key Components

### Product Card
- High-quality image display with hover effects
- Wishlist and cart functionality
- Rating and review display
- Material and certification info

### Shopping Cart
- Sliding sidebar with smooth animations
- Quantity management
- Real-time price calculations
- Persistent storage

### Header
- Responsive navigation with mobile menu
- Search functionality
- Cart and wishlist indicators
- Contact information display

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Customization

### Adding New Products
Update the `lib/data.ts` file with new product information:

```typescript
export const featuredProducts: Product[] = [
  {
    id: 'unique-id',
    name: 'Product Name',
    price: 50000,
    images: ['image-url'],
    category: 'Category',
    // ... other properties
  }
]
```

### Styling
Customize the design system in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      gold: {
        500: '#d4af37', // Primary gold color
      }
    }
  }
}
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Connect GitHub repository
- **AWS Amplify**: Use the build settings
- **Docker**: Use the included Dockerfile

## 📞 Business Information

**AJ Abhi Jewels**
- **Address**: Shop No 05, Skanda Business Park, Rajvihar, Kurnool - 518001
- **Phone**: +91 7947106192
- **WhatsApp**: +91 7947106192
- **Hours**: Open until 9:00 PM daily

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is proprietary software owned by AJ Abhi Jewels.

## 🆘 Support

For technical support or business inquiries:
- **Email**: info@ajabhijewels.com
- **Phone**: +91 7947106192
- **WhatsApp**: +91 7947106192

---

Built with ❤️ for AJ Abhi Jewels - Premium Jewelry Collection