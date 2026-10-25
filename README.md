# Sarfaraz Akram — Developer Portfolio

A modern, responsive portfolio for **Sarfaraz Akram**, a MERN stack developer. The site presents selected full-stack projects, individual case studies, technical skills, certificates, and a working contact form.

**Live portfolio:** [sarfarazakram.netlify.app](https://sarfarazakram.netlify.app)

## Highlights

- Responsive dark interface with an editorial, project-focused layout
- Four full-stack project showcases with live demos, source links, and dedicated case-study pages
- Portfolio sections for projects, certificates, technology, and awards
- Fine-pointer custom cursor with a spring-follow ring, contextual labels, and click feedback
- Reduced-motion and touch-device fallbacks
- Scroll-triggered motion, a typewriter introduction, and scroll progress indicator
- EmailJS contact form with name, email, subject, and message fields

## Featured projects

| Project | Summary |
| --- | --- |
| **Sam’s Kitchen** | Food ordering, delivery, payments, and role-based kitchen administration |
| **TourNest** | Tour package booking, guide applications, dashboards, and travel stories |
| **Studify** | Group study assignments, submissions, and peer review |
| **TaskWave** | Microtask marketplace with employer listings and freelancer bids |

Project details and technology lists are maintained in [`src/projectsData.js`](src/projectsData.js).

## Built with

- **React 19** and **Vite 7**
- **Tailwind CSS 4** for styling
- **React Router 7** for navigation and project case studies
- **React Icons** for interface icons
- **AOS**, **React Simple Typewriter**, and **React Parallax Tilt** for motion and interaction
- **EmailJS** and **React Toastify** for contact-form delivery and feedback

## Run locally

### Requirements

- Node.js 20.19+ or 22.12+
- npm

### Install and start

```bash
# Clone or download this repository, then move into its directory
npm install
npm run dev
```

Vite prints the local development URL in the terminal.

### Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run lint` | Run ESLint on the app source and Vite configuration |
| `npm run build` | Create the production build in `dist/` |
| `npm run preview` | Preview the production build locally |

## Configure the contact form

Create a `.env.local` file in the project root and add the EmailJS values for your account:

```env
VITE_emailjs_serviceId=your_service_id
VITE_emailjs_templateId=your_template_id
VITE_emailjs_publicKey=your_public_key
```

The contact form sends these template parameters: `user_name`, `user_email`, `subject`, `message`, and `time`. In the EmailJS template, include `{{subject}}` in the email subject or message body. For example, set the template subject to `Portfolio message: {{subject}}`.

Vite exposes variables prefixed with `VITE_` in the browser bundle. Use only the EmailJS public key here—never put a private key, account password, or other server-side secret in this file. `.env.local` is excluded from Git by `.gitignore`.

## Project structure

```text
src/
├── Components/       # Page sections and reusable UI
├── Layout/           # Home and shared layouts
├── assets/           # Portfolio and project images
├── projectsData.js   # Project descriptions, links, features, and technologies
├── index.css         # Theme, layout, and component styles
└── main.jsx          # React entry point and routes
```

The home page is served at `/`. Case studies use `/project/:projectName`.

## Deployment

Run `npm run build` and publish the generated `dist/` directory with your static hosting provider. Because case studies use client-side routing, configure the host to serve `index.html` for unknown paths so direct visits to `/project/...` work.