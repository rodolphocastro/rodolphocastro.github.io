# Rodolpho's Personal Website

This repository contains the sourcecode for my personal website.

## Tech Stack

- Vitepress
  - Markdown
  - Vite
  - Vue
- Playwright
- GitHub Actions

## Processes

### Git hooks

This project uses `husky` to streamline git operations when running locally.

Hooks may be found on the `.husky` folder at the root of the repository.

### Releasing

Releases are done by pushing a new tag to `main`.

Use `npm version --not-git-tag-version <patch|minor|major>` to increment versions.

Manually push tags to `main` for releases to happen.

### Localization

Vitepress is set-up to default to English but also support Brazilian Portuguese.

Any content within the `./pt` folder will be loaded as the Portuguese version of whatever content is being rendered.
