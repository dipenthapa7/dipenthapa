# PRD: Dipen Thapa AI/ML Portfolio

## Original Problem Statement
Redesign existing portfolio website https://dipenthapa7.com.np/ into a modern premium AI/ML student portfolio.

## User Personas
- **Primary**: Tech recruiters and hiring managers looking for AI/ML talent
- **Secondary**: Fellow students and potential collaborators
- **Tertiary**: Self (portfolio maintenance and updates)

## Core Requirements
- Modern clean UI with futuristic/techy design
- Mobile responsive layout
- Smooth animations (Framer Motion)
- Dark theme with professional look
- Sections: Home, About, Skills, Projects, Certificates, Contact
- Project cards with image, tech stack, GitHub/live demo links
- Resume download button
- Working contact form (EmailJS)
- Easy content editing via config file

## What's Been Implemented (March 20, 2026)

### Completed Features
1. **Navbar**: Floating glassmorphic navigation with smooth scroll, mobile hamburger menu
2. **Hero Section**: Profile image with glow effect, tagline, CTAs, social links, location badge
3. **About Section**: Bio, highlights, stats (10+ Projects, 8+ Technologies, 5+ Certificates)
4. **Skills Section**: 4 categories with animated progress bars, tech stack marquee
5. **Projects Section**: 6 project cards with category filters (All, AI/ML, Java, Python)
6. **Certificates Section**: 5 certificate cards with credential links
7. **Contact Section**: Form with validation + EmailJS demo mode
8. **Footer**: Navigation links, social links, copyright

### Technical Stack
- React 19
- Tailwind CSS with custom design tokens
- Framer Motion for animations
- EmailJS for contact form (demo mode)
- Lucide React for icons

### Design System
- Colors: Void (#020617), Surface (#0f172a), Cyan (#06b6d4), Violet (#7c3aed)
- Fonts: Outfit (headings), Plus Jakarta Sans (body), JetBrains Mono (code)
- Effects: Glassmorphism, neon glows, smooth hover transitions

## Backlog (P0/P1/P2)

### P0 - Critical (Not started)
- None - MVP complete

### P1 - High Priority
- [x] Configure real EmailJS credentials for working contact form (Completed March 20, 2026)
- [ ] Add actual resume PDF file
- [ ] Update project cards with real project screenshots
- [ ] Update certificates with actual credential URLs

### P2 - Nice to Have
- [ ] Add blog section
- [ ] Add testimonials section
- [ ] Dark/light theme toggle
- [ ] Add more animations (parallax, 3D effects)
- [ ] SEO meta tags optimization
- [ ] Analytics integration (Google Analytics/Plausible)

## Next Tasks
1. User to configure EmailJS: Get credentials from emailjs.com and update `portfolioData.js`
2. User to upload resume PDF to `/public/resume.pdf`
3. User to update project data with real projects in `portfolioData.js`
4. User to update certificate URLs with real credential links

## File Structure for Easy Editing
```
/app/frontend/src/data/portfolioData.js  - All content configuration
/app/frontend/public/resume.pdf          - Resume file (to be added)
```
