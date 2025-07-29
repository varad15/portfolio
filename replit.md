# Varad Jumbad Portfolio - Project Documentation

## Overview

This project is a modern, visually striking portfolio website for Varad Babasaheb Jumbad, a Computer Engineering student from VIT Pune. The application showcases his skills, projects, and experience through an interactive, animated interface built with cutting-edge web technologies.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a full-stack architecture with a clear separation between frontend, backend, and shared components:

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: Radix UI primitives with shadcn/ui component library
- **Animations**: Framer Motion for smooth transitions and micro-interactions
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server-side bundling

### Database Integration
- **ORM**: Drizzle ORM for type-safe database operations
- **Database**: PostgreSQL with Neon serverless driver
- **Schema Management**: Drizzle Kit for migrations and schema management

## Key Components

### Frontend Components
- **Navigation**: Fixed navigation bar with smooth scrolling
- **Hero Section**: Animated introduction with typewriter effect
- **About Section**: Personal information and education details
- **Skills Section**: Categorized technical and soft skills display
- **Experience Section**: Work experience with ML/AI focus
- **Projects Section**: Portfolio of major projects with tech stacks
- **Certifications**: Professional certifications display
- **Leadership**: Extracurricular activities and leadership roles
- **Contact**: Contact form and social media links
- **Footer**: Site credits and technology stack

### UI/UX Features
- **Dark Mode**: Forced dark theme with glassmorphism effects
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Typography**: Google Fonts (Inter, Space Grotesk, JetBrains Mono)
- **Animations**: Framer Motion for entrance animations and hover effects
- **Glass Effects**: Custom CSS for glassmorphic design elements

### Backend Components
- **Express Server**: RESTful API server with middleware
- **Storage Interface**: Abstracted storage with in-memory implementation
- **Route Registration**: Modular route system for API endpoints
- **Development Tools**: Vite integration for HMR and development

## Data Flow

### Client-Side Data Flow
1. React components fetch data using TanStack Query
2. Query client manages caching and background updates
3. API requests go through custom fetch wrapper with error handling
4. Components re-render based on query state changes

### Server-Side Data Flow
1. Express middleware processes incoming requests
2. Routes delegate to storage interface for data operations
3. Storage interface abstracts database operations
4. Responses formatted as JSON with error handling

### Development Flow
1. Vite dev server handles frontend assets and HMR
2. Express server serves API routes with prefix `/api`
3. Development middleware integrates Vite with Express
4. Source maps and debugging tools enabled in development

## External Dependencies

### Core Dependencies
- **@tanstack/react-query**: Server state management and caching
- **framer-motion**: Animation library for React components
- **drizzle-orm**: TypeScript ORM for database operations
- **@neondatabase/serverless**: Serverless PostgreSQL driver
- **wouter**: Lightweight routing for React

### UI Dependencies
- **@radix-ui/***: Unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework
- **class-variance-authority**: Type-safe variant API for components
- **clsx**: Conditional className utility

### Development Dependencies
- **vite**: Build tool and development server
- **tsx**: TypeScript execution engine
- **esbuild**: JavaScript bundler for production
- **drizzle-kit**: Database schema management tools

### Font and Icon Dependencies
- **Google Fonts**: Inter, Space Grotesk, JetBrains Mono
- **Font Awesome**: Icon library for social media and UI icons

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds React application to `dist/public`
2. **Backend Build**: esbuild bundles server code to `dist/index.js`
3. **Assets**: Static assets copied to build directory
4. **Environment**: Production environment variables loaded

### Deployment Configuration
- **Static Assets**: Served from `dist/public` directory
- **API Routes**: Express server handles `/api/*` routes
- **SPA Fallback**: All non-API routes serve React application
- **Database**: PostgreSQL connection via environment variable

### Development vs Production
- **Development**: Vite dev server with HMR and debugging tools
- **Production**: Optimized builds with minification and tree-shaking
- **Environment Detection**: `NODE_ENV` variable controls build behavior
- **Hot Reload**: Development-only features disabled in production

### Database Management
- **Schema**: Defined in `shared/schema.ts` with Drizzle ORM
- **Migrations**: Generated and managed by Drizzle Kit
- **Connection**: Serverless PostgreSQL via Neon database
- **Environment**: Database URL required via `DATABASE_URL` environment variable

The application is designed to be easily deployable on modern hosting platforms like Vercel, Netlify, or any Node.js-compatible hosting service with PostgreSQL database support.