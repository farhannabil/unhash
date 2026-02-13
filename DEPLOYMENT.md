# GitHub Pages Deployment

This repository is configured to automatically deploy the Stake Predictor application to GitHub Pages.

## Setup Instructions

To enable GitHub Pages deployment:

1. Go to your repository settings: https://github.com/farhannabil/unhash/settings/pages
2. Under "Build and deployment":
   - Source: Select "GitHub Actions"
3. Save the settings

## Deployment Workflow

The workflow (`.github/workflows/deploy.yml`) will:
- Automatically trigger on pushes to `main` or `master` branches
- Build the Next.js application in `examples/stake-predictor`
- Deploy the static output to GitHub Pages

## Accessing the Deployed Application

Once deployed, the application will be available at:
**https://farhannabil.github.io/unhash/**

## Manual Deployment

You can also trigger a manual deployment:
1. Go to Actions tab: https://github.com/farhannabil/unhash/actions
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

## Local Development

To run the application locally:

```bash
cd examples/stake-predictor
npm install
npm run dev
```

Open http://localhost:3000 in your browser.

## Build Configuration

The application is configured for GitHub Pages with:
- Static export enabled (`output: 'export'`)
- Base path set to `/unhash`
- Unoptimized images for static export compatibility
