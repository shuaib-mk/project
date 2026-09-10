# Dr. Maya Reynolds Therapy Website

A responsive, design-forward homepage for the fictional practice of Dr. Maya
Reynolds, PsyD. The project recreates the structure and visual rhythm of the
assigned counseling template, then gives it a distinct Santa Monica-inspired
identity and completely rewritten profile-based copy.

## Project overview

The homepage is designed for thoughtful, high-achieving adults seeking support
for anxiety, panic, trauma, burnout, perfectionism, and chronic stress. It
promotes in-person therapy in Santa Monica and secure telehealth throughout
California.

The copy, therapist biography, modalities, client focus, location, and office
details are based on the provided Dr. Maya Reynolds profile. The original
template is used only as the structural reference.

## Highlights

- Responsive desktop, tablet, and mobile layouts
- Original three-column editorial hero inspired by the reference site
- New Pacific blue, coral, mist, and warm ivory color system
- SEO-focused headings and metadata for Santa Monica therapy searches
- Three profile-based services: anxiety and panic therapy, trauma therapy, and
  burnout and perfectionism therapy
- Dedicated therapist biography and therapeutic approach section
- Custom “Our Office” section using the supplied office photographs
- Accessible semantic landmarks, image alt text, keyboard-friendly navigation,
  and expandable FAQs
- Reusable content data and Tailwind theme tokens for maintainability

## Tech stack

- [Next.js](https://nextjs.org/) 16 with the App Router
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- TypeScript
- Lucide icons

## Run locally

Requirements: Node.js 22.13 or newer and npm.

```bash
git clone https://github.com/shuaib-mk/project.git
cd project
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available commands

```bash
npm run dev        # Start the local development server
npm run build      # Create a production build
npm run start      # Run the production build
npm run typecheck  # Check TypeScript
```

## Project structure

```text
app/
  globals.css      Tailwind import, theme tokens, and global accessibility styles
  layout.tsx       Metadata and root page layout
  page.tsx         Homepage sections and content
public/
  maya-reynolds.png
  office-window.jpg
  office-library.jpg
  anxiety-therapy.png
  trauma-therapy.png
  burnout-therapy.png
```

## Deployment

The project is ready for Vercel:

1. Import this GitHub repository into Vercel.
2. Keep the detected framework preset as **Next.js**.
3. Deploy using the default build settings.

No environment variables are required.

## Content and image notes

- Therapist and office details come from the assignment's fictional Dr. Maya
  Reynolds profile.
- The portrait and office images were supplied with that profile.
- The supporting service images were created specifically for this redesign so
  the imagery stays consistent with the warm coastal visual direction.
- Dr. Maya Reynolds and this practice are fictional and were created for the
  internship assignment.

## Reference

- [Assigned homepage template](https://www.conejovalleycounseling.com/home)
- [Dr. Maya Reynolds profile](https://docs.google.com/document/d/1-IJVKEjuqV9CTd9QH16UNHJ7SQfdiweS4oAIZ8vmgHU/edit?usp=sharing)
