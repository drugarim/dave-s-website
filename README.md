# Portfolio Website

A modern, responsive portfolio website built with cutting-edge web technologies.

## Tech Stack

### Core Technologies
- **React** - A JavaScript library for building user interfaces
- **TypeScript** - Adds static typing to JavaScript for better development experience
- **Vite** - Next generation frontend tooling for faster development and builds

### Styling & UI
- **Tailwind CSS** - A utility-first CSS framework
- **shadcn/ui** - A collection of re-usable components built with Radix UI and Tailwind CSS
- **Lucide Icons** - A beautiful and consistent icon set
- **Framer Motion** - A production-ready motion library for React

### Data Management & API
- **Supabase** - An open source Firebase alternative providing:
  - Database management
  - Authentication
  - Edge Functions
  - File storage
- **@tanstack/react-query** - Powerful asynchronous state management

### Routing & Navigation
- **React Router DOM** - Client-side routing for React applications

### Features
- Responsive design that works on all devices
- Dark/Light mode support
- Contact form with Supabase backend
- Project showcase section
- Analytics tracking
- Internship application tracking integrated with Notion
- Deployment tracking and monitoring

### Database Tables
- Contact submissions
- Page visits analytics
- Deployment tracking
- Error logging
- Internship applications
- Photography images

### Project Structure
```
src/
├── components/     # Reusable UI components
├── pages/         # Route components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── integrations/  # Third-party service integrations
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Deployment

The project can be deployed through:
1. Lovable's built-in deployment feature
2. Manual deployment to platforms like Netlify

## Environment Variables

The following environment variables are required:
- `SUPABASE_URL`
- `SUPABASE_ANON_KEY`
- `NOTION_TOKEN` (for internship tracking)
- `NOTION_DATABASE_ID` (for internship tracking)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
