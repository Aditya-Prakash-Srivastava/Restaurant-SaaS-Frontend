# Restaurant SaaS - Production-Ready Frontend Architecture

A modern, scalable React frontend architecture powered by Vite, Tailwind CSS, and Axios, designed strictly around enterprise software engineering best practices.

---

## 📁 Project Structure

```text
Restaurant-SaaS-Frontend/
├── .editorconfig              # Code formatting rules across all IDEs
├── .env                       # Local environment configurations (ignored by Git)
├── .env.example               # Safe template for required environment variables
├── .gitignore                 # Files and folders untracked by Git
├── index.html                 # HTML5 entry point
├── package.json               # Frontend dependencies and run scripts
├── postcss.config.js          # PostCSS configuration for Tailwind
├── tailwind.config.js         # Tailwind theme & design tokens
├── vite.config.js             # Vite build & development server configuration
└── src/
    ├── main.jsx               # React DOM mounting entry point
    ├── App.jsx                # Global router provider wrapper
    ├── index.css              # Tailwind base, components, and utility layers
    │
    ├── config/                # Centralized environment configs
    │   └── index.js           # Validated, frozen configuration derived from import.meta.env
    │
    ├── constants/             # Application constants and static enums (separated)
    │   ├── apiEndpoints.js    # Backend REST endpoints (/health, /auth, etc.)
    │   ├── appConstants.js    # LocalStorage keys, pagination defaults, theme settings
    │   ├── index.js           # Aggregator export for all constants
    │   └── routes.js          # Client-side route paths (/, /login, /dashboard)
    │
    ├── services/              # API communication layer
    │   ├── apiClient.js       # Centralized Axios instance with auth & error interceptors
    │   └── health.service.js  # Diagnostic service connecting to backend health check
    │
    ├── hooks/                 # Custom reusable React hooks
    │   └── useHealthCheck.js  # Hook handling loading, data, and error state for health checks
    │
    ├── components/            # Reusable UI components
    │   ├── common/            # Atomic, primitive UI elements (Buttons, Cards, Spinners)
    │   │   ├── Button.jsx
    │   │   ├── Card.jsx
    │   │   └── Spinner.jsx
    │   └── layout/            # Layout components (Navbar, Footer, Sidebar)
    │       ├── Footer.jsx
    │       └── Navbar.jsx
    │
    ├── layouts/               # Full-page layout templates
    │   └── MainLayout.jsx     # Master layout (Header + Page Container + Footer)
    │
    ├── pages/                 # Route-level views
    │   ├── HomePage.jsx       # Landing view displaying real-time backend diagnostics
    │   └── NotFoundPage.jsx   # Standard 404 page
    │
    ├── routes/                # Client-side route declarations
    │   └── AppRoutes.jsx      # React Router route registry
    │
    ├── context/               # Global state providers (Auth, Tenant, Theme)
    │   └── README.md          # Architectural guide on context & state management
    │
    └── utils/                 # Utility helper functions
        └── formatters.js      # Formatting helpers for currency, dates, strings
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Ensure `VITE_API_BASE_URL` matches your backend address (default: `http://localhost:5000/api/v1`).

### 3. Run Development Server
```bash
npm run dev
```
The application will launch at `http://localhost:5173`.

