import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  description: string;
  problemStatement: string;
  features: string[];
  technologies: string[];
  screenshots: { url: string; caption: string }[];
  architecture: string;
  architectureDiagram?: string;
  databaseDesign?: string;
  erdDiagram?: string;
  apiContract?: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: 'in-progress';
  featured: boolean;
  year: number;
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  private readonly projects: Project[] = [
    {
      id: 'wedding-planner',
      title: 'Wedding Planner (IDoList)',
      shortDescription: 'Full-stack wedding planning SaaS — guest management, shareable RSVP links with QR codes, seating planner, budget tracker, supplier management, and task checklists.',
      description: 'IDoList is a full-stack wedding planning SaaS application. Couples manage their entire wedding from a single dashboard — guest lists, RSVP tracking, seating arrangements, budget, suppliers, and tasks. Guests can RSVP via a shareable public link or QR code without needing an account, and each guest also receives an individual token link for updating their own response.',
      problemStatement: 'Couples planning a wedding juggle guest lists in spreadsheets, RSVPs via email, seating plans on paper, and supplier contacts scattered across notes apps. There is no single source of truth, changes ripple across every document manually, and it\'s easy for responses to get lost. IDoList consolidates every planning workflow into one collaborative tool — giving couples a live view of their event and removing the admin overhead entirely.',
      features: [
        'Dashboard — live overview of RSVP status, budget spend, task progress, and seating at a glance',
        'Guest Management — full guest list with RSVP tracking, dietary requirements, and plus-ones',
        'Public RSVP Link — shareable URL and QR code for guest self-registration, downloadable as PNG',
        'Per-guest RSVP — individual token links so guests can update their own RSVP without an account',
        'Seating Planner — drag-and-assign table management with capacity enforcement',
        'Budget Tracker — itemised budget by category with actual vs estimated cost charts',
        'Supplier Manager — track vendors, contracts, deposits, and outstanding balances',
        'Task Checklist — prioritised task list with due dates and completion status',
        'Settings — manage wedding date, partner name, venue, and couple profile',
        'Demo Account — pre-populated with realistic data for evaluation without sign-up',
      ],
      technologies: ['Angular', 'Angular Material', 'Chart.js', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Neon', 'JWT', 'bcryptjs', 'OpenAPI 3.0', 'Azure Static Web Apps', 'Azure App Service', 'Cloudflare', 'GitHub Actions'],
      screenshots: [
        { url: '/assets/wedding-planner/wedding-planner-welcome-page.JPG', caption: 'Welcome page' },
        { url: '/assets/wedding-planner/wedding-planner-login-page.JPG', caption: 'Login page' },
        { url: '/assets/wedding-planner/wedding-planner-dashboard-page.JPG', caption: 'Dashboard overview' },
        { url: '/assets/wedding-planner/wedding-planner-guest-list-page.JPG', caption: 'Guest list management' },
        { url: '/assets/wedding-planner/wedding-planner-seating-page.JPG', caption: 'Seating planner' },
        { url: '/assets/wedding-planner/wedding-planner-budget-page.JPG', caption: 'Budget tracker' },
        { url: '/assets/wedding-planner/wedding-planner-suppliers-page.JPG', caption: 'Supplier manager' },
        { url: '/assets/wedding-planner/wedding-planner-tasks-page.JPG', caption: 'Task checklist' },
      ],
      architecture: 'Angular 20 SPA frontend deployed to Azure Static Web Apps, with Cloudflare handling DNS. Angular Material provides the component library; Chart.js powers the budget analytics charts. The backend is a Node.js/Express 4 REST API deployed to Azure App Service, with the full API contract documented in OpenAPI 3.0. Data is stored in a PostgreSQL database hosted on Neon (serverless Postgres). Authentication uses JWT with bcryptjs for password hashing. CI/CD is handled by GitHub Actions, building and deploying both frontend and backend on push to main. QR codes are generated client-side using the qrcode library — no external service required.',
      databaseDesign: 'PostgreSQL on Neon (serverless Postgres). Core tables: users, guests, tables, seating_assignments, budget_items, suppliers, tasks, rsvp_tokens, wedding_rsvp_codes. Each wedding has a unique public RSVP code (wedding_rsvp_codes) for the shareable link, and per-guest RSVP tokens (rsvp_tokens) so individual guests can update their own response. Both public flows require no authentication. Passwords are hashed with bcryptjs before persistence; JWTs are issued on login and expire after 7 days.',
      apiContract: 'RESTful Express API with full OpenAPI 3.0 spec. Public endpoints (no auth): POST /auth/register, POST /auth/login, GET|POST /rsvp/:token (per-guest RSVP), GET|POST /wedding-rsvp/:code (public shareable RSVP). Authenticated endpoints (Bearer JWT required): GET|POST|PATCH|DELETE /guests, GET|POST /tables, GET|POST /budget, GET|POST /suppliers, GET|POST /tasks, GET /dashboard. The RSVP code can be regenerated at any time, immediately invalidating the old public link.',
      erdDiagram: '/assets/wedding-planner/wedding-planner-erd.png',
      liveUrl: 'https://wedding-planner.alandineen.dev',
      githubUrl: 'https://github.com/alandineen13/wedding-planner',
      featured: true,
      year: 2024,
    },
    {
      id: 'ai-document-platform',
      title: 'AI Document Platform',
      shortDescription: 'Currently in planning — details to follow.',
      description: 'Currently in planning — details to follow.',
      problemStatement: 'Details to follow.',
      features: [],
      technologies: [],
      screenshots: [],
      architecture: 'Details to follow.',
      githubUrl: 'https://github.com/alandineen13',
      status: 'in-progress',
      featured: true,
      year: 2025,
    },
    {
      id: 'hr-management',
      title: 'HR Management Platform',
      shortDescription: 'Currently in planning — details to follow.',
      description: 'Currently in planning — details to follow.',
      problemStatement: 'Details to follow.',
      features: [],
      technologies: [],
      screenshots: [],
      architecture: 'Details to follow.',
      githubUrl: 'https://github.com/alandineen13',
      status: 'in-progress',
      featured: true,
      year: 2025,
    },
    {
      id: 'portfolio',
      title: 'Personal Portfolio',
      shortDescription: 'This site — an Angular 20 portfolio with project showcases, screenshot lightboxes, a career timeline, CV download, and a dark-themed component-driven design.',
      description: 'The site you\'re currently on. Built to give recruiters and collaborators a richer view of my work and background than a PDF CV alone — featuring project showcases with modal previews and dedicated project pages, screenshot lightboxes with keyboard navigation, ERD diagrams, a career timeline on the About page, a downloadable CV, and a contact page with work location preferences.',
      problemStatement: 'A PDF CV is a static snapshot. It shows what someone has done, but not how they think, what they build, or how they communicate. This portfolio fills that gap — presenting real projects with architecture breakdowns, problem statements and technical detail, alongside my career story in a format designed for the web rather than a printer.',
      features: [
        'Project showcase — modal quick-view on the home page, with full dedicated project pages covering architecture, database design, ERD diagrams, and API contracts',
        'Screenshot lightbox — click any screenshot to open a full-screen lightbox with prev/next navigation and keyboard controls (arrow keys + Escape)',
        'ERD section — dedicated Entity Relationship Diagram section with its own lightbox on project detail pages',
        'In-progress badges — amber status badges on projects still under development, visible across all listing and detail views',
        'About page — career timeline from education through to current role, skills breakdown, and downloadable CV PDF',
        'Contact page — direct links plus a full-width work location preferences card showing office, hybrid, and remote preferences',
        'Responsive design — clean layout across desktop, tablet, and mobile',
        'Dark-theme UI — CSS custom properties, radial gradient blobs, and keyframe animations',
      ],
      technologies: ['Angular 20', 'TypeScript', 'SCSS', 'Angular Router', 'Angular CLI'],
      screenshots: [
        { url: '/assets/my-portfolio/my-portfolio-home-page.JPG', caption: 'Home page — hero, welcome section and featured projects' },
        { url: '/assets/my-portfolio/my-portfolio-projects-page.JPG', caption: 'Projects listing' },
        { url: '/assets/my-portfolio/my-portfolio-individual-project-page.JPG', caption: 'Individual project page with screenshots and technical detail' },
        { url: '/assets/my-portfolio/my-portfolio-about-page.JPG', caption: 'About page — career timeline, skills and CV download' },
        { url: '/assets/my-portfolio/my-portfolio-contact-page.JPG', caption: 'Contact page with work location preferences' },
      ],
      architecture: 'Single-page Angular 20 application (NgModule-based, standalone: false) with no backend or database. Content is managed in a typed service layer — ProjectsService acts as a static data store returning the full project list or individual projects by ID. Angular Router handles client-side navigation across four pages: Home, About, Projects, and Contact. Project detail pages are dynamically rendered from the route parameter (/projects/:id). The home page uses a modal preview pattern for featured projects; the Projects list navigates directly to detail pages. Lightboxes use @HostListener to capture keyboard events and body scroll-lock on open.',
      githubUrl: 'https://github.com/alandineen13/my-portfolio',
      liveUrl: 'https://alandineen.dev',
      featured: false,
      year: 2026,
    },
  ];

  getAll(): Project[] {
    return this.projects;
  }

  getFeatured(): Project[] {
    return this.projects.filter(p => p.featured);
  }

  getById(id: string): Project | undefined {
    return this.projects.find(p => p.id === id);
  }
}
