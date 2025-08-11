# American Museum of Natural History Website

A comprehensive Next.js website clone of the American Museum of Natural History, featuring exhibitions, collections, educational programs, and events. Built with modern web technologies and powered by Cosmic CMS for seamless content management.

![App Preview](https://imgix.cosmicjs.com/eab357e0-7701-11f0-a051-23c10f41277a-photo-1578321272176-b7bbc0679853-1754951055131.jpg?w=1200&h=300&fit=crop&auto=format,compress)

## Features

- **🏛️ Exhibition Galleries** - Immersive displays of current, upcoming, and past exhibitions
- **💎 Collection Explorer** - Browse museum artifacts by category (Paleontology, Anthropology, Geology, Astronomy, Biology)
- **📚 Educational Programs** - Discover learning opportunities for all ages
- **🎫 Event Calendar** - Stay updated on special events and lectures
- **📱 Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **⚡ Performance Optimized** - Built with Next.js 15 and modern web standards
- **🔄 Real-time Content** - Powered by Cosmic CMS for dynamic updates

## Clone this Bucket and Code Repository

Want to create your own version of this project with all the content and structure? Clone this Cosmic bucket and code repository to get started instantly:

[![Clone this Bucket and Code Repository](https://img.shields.io/badge/Clone%20this%20Bucket-29abe2?style=for-the-badge&logo=cosmic&logoColor=white)](https://app.cosmic-staging.com/projects/new?clone_bucket=689a6d0bc1c6145c9a9d5def&clone_repository=689a6f90bf7ea491ff0745db)

## Prompts

This application was built using the following prompts to generate the content structure and code:

### Content Model Prompt

> Create a clone of https://www.amnh.org

### Code Generation Prompt

> Build a Next.js website clone of https://www.amnh.org

The app has been tailored to work with your existing Cosmic content structure and includes all the features requested above.

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Cosmic CMS** - Headless content management
- **React** - UI component library

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- A Cosmic account and bucket

### Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   bun install
   ```

3. Set up your environment variables:
   ```bash
   cp .env.example .env.local
   ```

4. Add your Cosmic credentials to `.env.local`:
   ```
   COSMIC_BUCKET_SLUG=your-bucket-slug
   COSMIC_READ_KEY=your-read-key
   COSMIC_WRITE_KEY=your-write-key
   ```

5. Start the development server:
   ```bash
   bun dev
   ```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Cosmic SDK Examples

### Fetching Exhibitions
```typescript
import { cosmic } from '@/lib/cosmic'

// Get all current exhibitions
const currentExhibitions = await cosmic.objects
  .find({ 
    type: 'exhibitions',
    'metadata.exhibition_status': 'current' 
  })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

### Fetching Collections by Category
```typescript
// Get paleontology collection items
const paleontologyItems = await cosmic.objects
  .find({ 
    type: 'collections',
    'metadata.category': 'paleontology' 
  })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

### Educational Programs by Age Group
```typescript
// Get children's programs
const childrenPrograms = await cosmic.objects
  .find({ 
    type: 'educational-programs',
    'metadata.age_group': 'children' 
  })
  .props(['title', 'slug', 'metadata'])
  .depth(1)
```

## Cosmic CMS Integration

This application leverages your existing Cosmic bucket with the following object types:

- **Exhibitions** (exhibitions) - Museum exhibitions with dates, descriptions, and galleries
- **Collections** (collections) - Artifact and specimen collections with categorization
- **Educational Programs** (educational-programs) - Learning programs organized by age group
- **Events** (events) - Special events, lectures, and museum activities

Each object type includes rich metadata fields for comprehensive content management through the Cosmic dashboard.

## Deployment Options

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Add your environment variables in the Netlify dashboard
4. Deploy

For production deployment, make sure to set the environment variables in your hosting platform's dashboard.

<!-- README_END -->