# ShivShilp LLC Website

Official corporate website for **ShivShilp LLC**, a software consulting and digital technology solutions company based in Franklin, Tennessee, USA.

## Project Overview

This repository contains a static, production-ready React and TypeScript web application built with Vite and Tailwind CSS. It presents ShivShilp LLC's core consulting services, conceptual solution blueprints, company overview, educational insights, direct phone-based contact details, and starter legal pages.

Key architectural characteristics:
- **No backend or database required** for hosting or core operation.
- **No email-sending services or external form dependencies**; direct phone contact (`tel:+19315291000`) is the primary contact channel, while the Contact page is structured cleanly to support adding a real inquiry form in a future phase.
- **Light and dark theme support** with user preference persistence.
- **Bundled local visual assets** and custom SVG branding/favicon so no external image URLs can break after deployment.
- **GitHub Pages ready** with configurable base path (`VITE_BASE_PATH`) and automated SPA fallback handling (`dist/404.html`).

## Technology Stack

- **React 19** + **TypeScript**
- **Vite** (build tool & development server)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router (`react-router-dom`)**
- **Lucide React** (lightweight SVG icons)

## Prerequisites

- **Bun** 1.4+ (matches `bun.lock` lockfile format and the GitHub Actions workflow)

## Local Installation

```bash
bun install
```

## Development Commands

Start the local development server on port `3000`:

```bash
bun run dev
```

Run TypeScript typechecking and lint validation:

```bash
bun run lint
```

## Production Build

Build the optimized static bundle into `dist/`:

```bash
bun run build
```

Preview the production build locally:

```bash
bun run preview
```

To test a GitHub Pages project subpath build locally (replace `your-repo-name` with your repository name):

```bash
VITE_BASE_PATH="/your-repo-name/" bun run build
bun run preview
```

## GitHub Repository Setup

1. Create a new repository on GitHub (for example, `shivshilp-website`).
2. Initialize Git locally if needed and push the project to the `main` branch:

```bash
git init
git add .
git commit -m "Initial commit: ShivShilp LLC website"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

## GitHub Pages Configuration Steps

1. Open your repository on GitHub and navigate to **Settings → Pages**.
2. Under **Build and deployment → Source**, select **GitHub Actions**.
3. Push to `main` (or open the **Actions** tab and trigger **Deploy ShivShilp Website to GitHub Pages** manually via `workflow_dispatch`).
4. The workflow in `.github/workflows/deploy.yml` will automatically:
   - Set up Bun via `oven-sh/setup-bun@v2`
   - Install dependencies from `bun.lock` with `bun install --frozen-lockfile`
   - Run `bun run lint`
   - Determine the appropriate `VITE_BASE_PATH` from `actions/configure-pages` (or repository variable `VITE_BASE_PATH`)
   - Run `bun run build` (which also generates `dist/404.html` for client-side SPA routing)
   - Deploy `./dist` to GitHub Pages.

## Setting the Correct Base Path (`VITE_BASE_PATH`)

- **Local development**: Defaults to `/`.
- **GitHub Pages project site** (`https://<username>.github.io/<repo-name>/`): Handled automatically in `.github/workflows/deploy.yml` via `steps.pages.outputs.base_path`. You can also explicitly set a repository variable named `VITE_BASE_PATH` (e.g., `/<repo-name>/`) under **Settings → Secrets and variables → Actions → Variables**.
- **Custom domain** (`https://shivshilp.com/`): Set the repository variable `VITE_BASE_PATH` to `/` so all assets and routes resolve from the domain root.

## Connecting a Custom Domain in the Future

1. In your GitHub repository, go to **Settings → Pages → Custom domain**, enter your domain (e.g., `www.shivshilp.com` or `shivshilp.com`), and save.
2. Configure your DNS provider records (`A`/`AAAA` records for an apex domain or `CNAME` record for `www`) per GitHub Pages documentation.
3. Enable **Enforce HTTPS** once DNS propagation completes.
4. Set repository variable `VITE_BASE_PATH` to `/` (if previously overridden) and re-run the deployment workflow.
5. Update `public/sitemap.xml` and `public/robots.txt` with your final production domain URL.

## Updating Company Information and Services

Content is centralized so updates require minimal file edits:

- **Company details, phone, address, and navigation**: `src/config/siteConfig.ts`
- **Services catalog**: `src/data/services.ts`
- **Solution blueprints**: `src/data/solutions.ts`
- **Insights articles**: `src/data/insights.ts`
- **Why ShivShilp, Delivery Approach, Tech Ecosystem, and About pillars**: `src/data/company.ts`

## Troubleshooting

- **404 on page refresh on GitHub Pages**: Verify that `bun run build` generated `dist/404.html` and that **Settings → Pages → Source** is set to **GitHub Actions** (not deploying from a raw branch folder).
- **Broken CSS/JS/image paths on a project subpath**: Confirm `VITE_BASE_PATH` includes leading and trailing slashes (for example, `/Parag/`). `vite.config.ts` normalizes slashes automatically when `VITE_BASE_PATH` is set.
- **Custom domain still loading subpath URLs**: Check **Settings → Secrets and variables → Actions → Variables** and ensure `VITE_BASE_PATH` is set to `/`, then re-run the workflow.
- **TypeScript build errors**: Run `bun run lint` locally to inspect any type errors before pushing.
