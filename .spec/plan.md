# Development Plan

## Phase 1: Setup
- Initialize Next.js project
- Configure TypeScript
- Configure Tailwind CSS
- Setup Git repository

## Phase 2: Frontend Development
- Homepage
- Destinations page
- Navbar
- Footer
- Responsive layout

## Phase 3: Backend Development
- FastAPI setup
- API routes
- Chatbot integration

## Phase 4: RAG Integration
- Knowledge base creation
- TF-IDF vectorization
- Similarity search
- Dynamic retrieval

## Phase 5: Deployment
- GitHub upload
- Vercel deployment
- Final testing

# Feature Checklist 
- Chat UI implemented ✔
- AI assistant response system ✔
- Backend API integration ✔
- Message loading state ✔
- Error handling ✔
- Message storage (optional / pending)

# Timeline Estimation
- Phase 1: UI Design (2 days)
- Phase 2: Backend Setup (2 days)
- Phase 3: AI Integration (3 days)
- Phase 4: Testing & Debugging (1–2 days)

# Tech Stack Documentation
- Frontend: Next.js (React)
- Styling: Tailwind CSS
- Backend: FastAPI (Python)
- Communication: REST API
- Data Handling: JSON / optional database

# File Structure 
hidden-pakistan/
│
├── .next/                      # Next.js build output (auto-generated)
│
├── .spec/                     # Spec-Kit documentation
│   ├── memory/
│   ├── skills/
│   ├── tasks/
│   │   ├── 001-setup.md
│   │   ├── 002-navbar.md
│   │   ├── 003-homepage.md
│   │   ├── 004-destinations.md
│   │   ├── 005-about.md
│   │   ├── 006-chatbot.md
│   │   ├── 007-testing.md
│   │   └── 008-deployment.md
│   ├── constitution.md
│   └── plan.md
│
├── app/                       # Next.js App Router
│   ├── about/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   ├── destinations/
│   │   └── page.tsx
│   ├── tips/
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── favicon.ico
│
├── backend/                   # FastAPI backend
│   ├── routers/
│   ├── services/
│   │   ├── database.py
│   │   └── qdrant_service.py
│   ├── __pycache__/
│   ├── .env
│   └── main.py
│
├── components/                # Reusable UI components
│   ├── ChatWidget.tsx
│   ├── DestinationCard.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   └── Navbar.tsx
│
├── data/
│   └── destinations.ts
│
├── docs/
│   ├── claude-workflow.md
│   └── specification.md
│
├── knowledge_base/
│   └── tourism_data.txt
│
├── public/
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
│
├── .env.local
├── .gitignore
├── AGENTS.md
├── CLAUDE.md
├── eslint.config.mjs
├── next.config.ts
├── next-env.d.ts
├── package.json
├── package-lock.json
├── postcss.config.mjs
├── README.md
├── structure.txt
└── tsconfig.json