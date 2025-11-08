# Linker Official Website

Professional website for the Linker VS Code extension - Intelligent Import Management for Multi-Language Projects.

## 🌐 Live Site

Visit: [Deploy on Vercel]

## 📋 Features

- **Modern Design**: Dark theme with orange/pink gradients
- **Responsive**: Mobile-friendly layout
- **Fast**: Built with Next.js 16 and optimized for performance
- **Professional Documentation**: Complete guide with sidebar navigation
- **SEO Optimized**: Meta tags and proper structure

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Vercel
- **React**: 19.2.0

## 🚀 Getting Started

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start
```

## 🌐 Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "Add New Project"
4. Import your repository
5. Vercel will auto-detect Next.js settings
6. Click "Deploy"
7. Your site will be live in minutes!

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to your Vercel account
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Environment Variables (Optional)

If you need environment variables, add them in Vercel:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add variables from `.env.example`


## 📁 Project Structure

```
linker-website/
├── app/
│   ├── about/          # About page
│   ├── user-guide/     # User Guide documentation
│   ├── layout.tsx      # Root layout
│   ├── page.tsx        # Home page
│   └── globals.css     # Global styles
├── components/
│   ├── layout/
│   │   ├── Header.tsx  # Navigation header with theme toggle
│   │   └── Footer.tsx  # Footer with newsletter and social links
│   └── ClientLayout.tsx # Client-side layout wrapper
├── context/
│   └── ThemeContext.tsx # Dark/Light mode theme provider
└── public/
    ├── images/         # Place your images here
    └── videos/         # Place your demo video here
```

## 🎨 Required Assets

### Images
Place the following files in `public/images/`:
- **linker-logo.png** - Your Linker logo (used throughout the site)
- **video-thumbnail.png** - Thumbnail for the demo video (optional)

### Videos
Place the following files in `public/videos/`:
- **linker-demo.mp4** - Demo video showing Linker in action

## 🌐 Pages

### Home Page (/)
- Hero section with animated background
- Demo video section
- Key features showcase
- Language support badges
- Call-to-action sections

### About Page (/about)
- Extension overview
- Core features with visual examples
- How it works (step-by-step)
- Benefits and use cases

### User Guide (/user-guide)
- Complete documentation
- Installation instructions
- Getting started guide
- Supported languages
- Configuration options
- Troubleshooting
- FAQ

## 🎨 Features

- ✅ **Dark/Light Mode** - Toggle between themes (persisted in localStorage)
- ✅ **Responsive Design** - Mobile-first, works on all screen sizes
- ✅ **Newsletter Subscription** - Email capture in footer
- ✅ **Social Links** - LinkedIn and Twitter integration
- ✅ **Smooth Animations** - Floating logos, wave effects, hover states
- ✅ **SEO Optimized** - Meta tags and descriptions

## ⚙️ Configuration

### Theme
The theme system uses:
- React Context for state management
- localStorage for persistence
- Tailwind's dark mode with class strategy

### Colors
Primary gradient colors used throughout:
- Blue: `#2563eb` (`blue-600`)
- Purple: `#9333ea` (`purple-600`)
- Pink: `#db2777` (`pink-600`)

### Social Links
Update your social media links in `components/layout/Footer.tsx`:
```tsx
// LinkedIn
href="https://www.linkedin.com/company/linker-extension"

// Twitter
href="https://twitter.com/linker_extension"
```

## 📝 Customization

### Update Extension Details
- Edit content in `app/page.tsx` for home page
- Edit content in `app/about/page.tsx` for about page
- Edit documentation in `app/user-guide/page.tsx`

### Update Metadata
Edit SEO information in `app/layout.tsx`:
```tsx
export const metadata: Metadata = {
  title: "Your Title",
  description: "Your Description",
};
```

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Deploy to Other Platforms

Build the project:
```bash
npm run build
```

The `out` folder contains your static files (if using `output: 'export'`), or deploy the entire `.next` folder for server-side rendering.

## 📦 Dependencies

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **React** - UI library

## 🛠️ Development Tips

1. **Hot Reload** - Changes auto-refresh in development
2. **TypeScript** - Get type checking and autocomplete
3. **ESLint** - Code linting enabled
4. **Dark Mode** - Test both themes while developing

## 📄 License

MIT License - Same as the Linker extension

## 🤝 Support

For questions or issues with the website, please contact via:
- Email: your-email@example.com
- LinkedIn: [Your LinkedIn]
- Twitter: [Your Twitter]

---

**Made with ❤️ for the Linker VS Code Extension**
