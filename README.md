# Personal Portfolio — alandineen.dev

A single-page Angular 20 application showcasing my projects, career history, and contact information. Built as a richer alternative to a PDF CV — with dedicated project detail pages, screenshot lightboxes, ERD diagrams, and a career timeline.

---

## Features

- **Hero** — introduction with tech stack, availability badge, and CV download
- **Project Showcase** — modal quick-view on the home page, with full dedicated project detail pages covering architecture, database design, ERD diagrams, and API contracts
- **Screenshot Lightbox** — click-to-zoom with prev/next navigation and keyboard controls (arrow keys + Escape)
- **ERD Viewer** — dedicated Entity Relationship Diagram section with its own lightbox on project pages
- **In-Progress Badges** — amber status badges on projects still under development, visible across all listing and detail views
- **About Page** — career timeline from education through to current role at Fidelity Investments, skills breakdown, and downloadable CV PDF
- **Contact Page** — direct contact links and a full-width work location preferences card (office, hybrid, remote)
- **Responsive** — clean layout across desktop, tablet, and mobile

---

## Screenshots

### Home
![Home page](public/assets/my-portfolio/my-portfolio-home-page.JPG)

### Projects
![Projects listing](public/assets/my-portfolio/my-portfolio-projects-page.JPG)

### Project Detail
![Individual project page](public/assets/my-portfolio/my-portfolio-individual-project-page.JPG)

### About
![About page](public/assets/my-portfolio/my-portfolio-about-page.JPG)

### Contact
![Contact page](public/assets/my-portfolio/my-portfolio-contact-page.JPG)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Angular 20 (NgModule-based) |
| Language | TypeScript |
| Styles | SCSS (CSS custom properties, dark theme) |
| Routing | Angular Router |
| Tooling | Angular CLI 20 |

---

## Pages

| Route | Page |
|---|---|
| `/` | Home — hero, welcome section, featured projects grid |
| `/about` | About — career timeline, skills, and CV download |
| `/projects` | Projects — full project listing |
| `/projects/:id` | Project Detail — architecture, screenshots, ERD, and API contract |
| `/contact` | Contact — links and work location preferences |

---

## Project Structure

```
frontend/portfolio/
└── src/
    ├── app/
    │   ├── components/
    │   │   ├── nav/              # Top navigation bar
    │   │   └── footer/           # Footer with social links
    │   ├── pages/
    │   │   ├── home/             # Hero, featured projects, modal preview
    │   │   ├── about/            # Career timeline, skills, CV download
    │   │   ├── projects/         # Project listing grid
    │   │   ├── project-detail/   # Individual project pages with lightbox
    │   │   └── contact/          # Contact links and location preferences
    │   └── services/
    │       └── projects.ts       # Typed static project data store
    ├── styles.scss               # Global tokens, buttons, cards, badges
    └── index.html
└── public/
    └── assets/                   # Static assets served at build time
        ├── AlanDanielDineen__CV.pdf
        ├── my-portfolio/         # Portfolio screenshots
        └── wedding-planner/      # Wedding Planner screenshots and ERD
```

---

## Running Locally

```bash
cd frontend/portfolio
npm install
ng serve
```

Navigate to `http://localhost:4200`.

---

## Live Site

[alandineen.dev](https://alandineen.dev)
