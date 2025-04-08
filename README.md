# Astro practice

This is a practice project for Astro and Figma. Original project repo can be found here: https://github.com/coding-in-public/desgn-landing-page

Big thanks to [@coding-in-public](https://github.com/coding-in-public) for the original project!

This repo follows the original project with some changes:

- Code updated so that it works with current Astro version (5.6). A lot of the assets are moved to the `public` folder so that Astro can serve them directly during build time.
- Javascript files are now imported from the `public` folder instead of the `src` folder and I made small fixes to Javascript code so that it works properly.
- I also downloaded most of the assets for local use so that when there are changes to Astro or to library imports, I don't have to come and fix code every time. I noticed that the original project was not working with the latest Astro version and a lot of the code was outdated and deprecated so I fixed all that.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
