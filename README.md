# belphe13.github.io

This site is built with [Eleventy](https://www.11ty.dev/).

## Development

1. Install dependencies:
   ```
   npm install
   ```
2. Build the site:
   ```
   npm run build
   ```
   The generated site will be in the `_site` directory.

All HTML files live in the `src/` directory and share a common layout with global navigation and scripts. Static assets such as CSS and JavaScript are copied to the output unchanged.

## Deployment

- **GitHub Pages (lilanyang.studio):** Pushing to `develop` or `master` runs the `Deploy Eleventy to GitHub Pages` workflow, which builds the site and publishes `_site` to Pages.
- **Netlify (lilanyang.netlify.app):** Add a repository secret named `NETLIFY_BUILD_HOOK` with your site’s build hook URL. The workflow will trigger it on each push to `develop` or `master` after the build completes. If the secret is unset, the workflow will skip the Netlify trigger while still completing the GitHub Pages deploy.

