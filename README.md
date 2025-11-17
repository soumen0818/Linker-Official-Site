
# Linker Official Website

Professional website for the Linker VS Code extension — Intelligent Import Management for Multi-Language Projects.

## 🌐 Live Site

Visit the live site: https://linker-steel-xi.vercel.app/

## 📋 Overview

This repository contains the marketing website and documentation for the Linker VS Code extension. The site is built with Next.js (App Router) and Tailwind CSS, and is deployed to Vercel.

##  Notable Updates (latest)

- Documentation route renamed to `/documentation` (previously `/user-guide`).
- Newsletter subscription implemented in the footer — subscriptions are stored in a Google Sheet (service-account based).
- Social links updated to the project owner's profiles.


## 🛠 Tech Stack

- Framework: Next.js (App Router)
- Language: TypeScript
- Styling: Tailwind CSS
- Deployment: Vercel

## 🚀 Getting Started (development)

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open http://localhost:3000 in your browser.

### Build for production

```bash
# Build the application
npm run build

# Start production server (if applicable)
npm start
```

## 🔧 Newsletter / Subscription (how it works)

- The footer subscription form posts to `POST /api/subscribe`.
- The API stores emails in a Google Sheet using a Google service account.
- Duplicate subscriptions are prevented server-side.
- You must configure environment variables (see `.env.local.example` and `NEWSLETTER_README.md`).

Files of interest:
- `app/api/subscribe/route.ts` — API route that validates, writes to Google Sheets, and returns friendly messages.
- `NEWSLETTER_README.md` and `NEWSLETTER_SETUP.md` — setup instructions for Google Cloud service account and `.env.local`.

Environment variables (set in `.env.local`):
```
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@your-project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your-spreadsheet-id
```

> Important: Do not commit `.env.local` — it is included in `.gitignore`.

## 📁 Project Structure (important parts)

```
linker-website/
├── app/
│   ├── about/                # About page
│   ├── documentation/        # Documentation (was user-guide)
│   ├── api/                  # API routes (e.g., /api/subscribe)
│   ├── layout.tsx            # Root layout
│   └── page.tsx              # Home page
├── components/
│   └── layout/
│       ├── Header.tsx        # Site header + nav
│       └── Footer.tsx        # Footer, newsletter + socials
├── scripts/                  # Handy scripts (e.g., verify spreadsheet access)
├── NEWSLETTER_README.md      # How to set up newsletter Google Sheets
├── NEWSLETTER_SETUP.md       # Step-by-step newsletter setup
└── .env.local.example        # Example env file
```

## 🔗 Links in code to update

- Documentation route links now point to `/documentation` (update any hard-coded `/user-guide` occurrences if present).
- Social links are set in `components/layout/Footer.tsx` — update if you need different targets.

## 📦 Deployment (Vercel)

Recommended: push to GitHub and import the repo on Vercel. Ensure env vars are set in Vercel dashboard for production (the Google Sheets credentials and sheet id).

## 📝 Notes & Tips

- If the subscription API returns an error about spreadsheet access, confirm that:
  1. `GOOGLE_SHEET_ID` contains only the ID (not the full URL).
  2. The Google Sheet is shared with the service account email (from the JSON key).
  3. `GOOGLE_PRIVATE_KEY` is formatted correctly in `.env.local` (use `\n` for line breaks inside the quoted value).

- For sending thank-you emails automatically, integrate an email provider (SendGrid, Resend, etc.) and configure additional env vars.

## 🤝 Support

For questions about the website or Linker extension, contact:

- Email: `importlinker@gmail.com`
- LinkedIn:[Linkedin](https://www.linkedin.com/in/soumen-das-76b867218/)
- X: [Twitter](https://x.com/SoumenDas334584)

---

**Made with ❤️ for the Linker VS Code Extension**

Professional website for the Linker VS Code extension - Intelligent Import Management for Multi-Language Projects.

