# Sewaro Tattoo

A premium, responsive tattoo studio website built with Next.js and TypeScript, featuring online consultation booking, tattoo gallery showcases, client testimonials, and seamless customer engagement tools designed to enhance the custom tattoo and body art experience.

## 🍽️ About

Sewaro Tattoo is a premium tattoo studio and body art destination designed to provide clients with an exceptional creative experience. The website features bold design and intuitive navigation to showcase comprehensive tattoo styles and custom artwork while facilitating seamless consultation booking.

## ✨ Features

- **Responsive Design** - Optimized for all devices (desktop, tablet, mobile)
- **Online Appointments** - Easy appointment booking system with form validation
- **Contact Information** - Easy-to-find location, hours, and contact details
- **Performance Optimized** - Fast loading times and smooth user experience
- **SEO Friendly** - Optimized for search engines and local discovery

## 🛠️ Technology Stack

- **Frontend Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS / Custom CSS
- **Type Safety**: TypeScript
- **Form Handling**: React Hook Form with validation
- **Performance**: Image optimization and lazy loading
- **Deployment**: Vercel with custom domain support

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd rathi-dental
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

### Build for Production

```bash
npm run build
npm run start
```

## 🏗️ Project Structure

```
sewaro-tattoo/
├── .github/
├── public/
│   ├── fonts/
│   │   ├── oswald/
│   │   │   ├── Oswald-200.woff2
│   │   │   ├── ...
│   │   │   └── Oswald-Regular.woff2
│   │   ├── rozha-one/
│   │   │   ├── Oswald-200.woff2
│   │   │   ├── ...
│   │   │   └── Oswald-Regular.woff2
│   │   └── raleway
│   │   │   └── RozhaOne-Regular.woff2
│   ├── images/
│   │   ├── chocolat/
│   │   ├── ...
│   │   └── quotation.webp
│   ├── js/
│   │   └── plugins.js
│   └── favicon_io/
│       ├── favicon.ico
│       ├── ...
│       └── site.webmanifest
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── layout.tsx
│   │   ├── sitempa.ts
│   │   └── vendor.css
│   ├── components/
│   │   ├── utility/
│   │   │   ├── Button/
│   │   │   ├── ....
│   │   │   └── InputField.tsx
│   │   ├── About/
│   │   ├── ...
│   │   └── Articles.tsx
│   ├── constants/
│   │   ├── articles.ts
│   │   ├── ...
│   │   └── testimonials.ts
│   ├── middlewares/
│   │   └── schema.ts
│   ├── hooks/
│   │   ├── useAlert.ts
│   │   └── useFormSubmission.ts
│   ├── types/
│   │   ├── jquery.d.ts
│   │   └── index.ts
│   └── utils/
│       ├── clsx.ts
│       ├── ...
│       └── subscriptionData.ts
├── .env.example
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── global.d.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tsconfig.json
├── vercel.json
├── LICENSE
└── README.md
```

## 🎨 Key Components

### Appointment System
- Form validation with error handling
- Real-time form feedback
- Mobile-optimized interface

## 📱 Responsive Design

The website is fully responsive and tested on:
- **Desktop**: 1920px and above
- **Laptop**: 1024px - 1919px
- **Tablet**: 768px - 1023px
- **Mobile**: 320px - 767px

## 🔧 Configuration

### Custom Domain Setup

The website is configured for the custom domain `sewarotattoo.com`:

1. DNS records are configured for the domain
2. SSL certificates are automatically provisioned
3. www and non-www versions are handled

## 📊 Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic code splitting for optimal loading
- **CSS Optimization**: Tailwind CSS with unused style purging
- **SEO**: Meta tags, structured data, and sitemap

## 🧪 Testing

Run the test suite:
```bash
npm run test
```

Check code quality:
```bash
npm run lint
npm run type-check
```

## 📈 SEO Features

- Meta tags
- Open Graph support
- Structured data for restaurant information
- Local business schema markup
- Sitemap generation

## 🚀 Deployment

The website is deployed on Vercel with automatic deployments:

- **Production**: https://sewarotattoo.com
- **Preview**: Automatic preview deployments for pull requests

### Manual Deployment

```bash
npm run build
npm run export  # if using static export
```

## 📞 Support & Maintenance

### Client Information
- **Tattoo Studio**: Sewaro Tattoo
- **Domain**: sewarotattoo.com
- **Deployment**: Vercel

### Developer Contact
For technical support or website updates, contact the developer.

## 📝 License

This project is proprietary software developed specifically for Sewaro Tattoo.

---

**Built with ❤️ for Sewaro Tattoo**

*For any questions or support regarding this website, contact **[chyroshan066](https://github.com/chyroshan066)**.*

sjkhgao