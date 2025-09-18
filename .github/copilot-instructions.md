# Project overview

This project is a personal blog website that also holds my personal curriculum and portfolio as a software engineering.

## Tech Stack

This project is built using the following technologies:

- Vite (a build tool that aims to provide a faster and leaner development experience for modern web projects)
- Vitepress (a static site generator for Vite and Vue)
- Vue (a progressive JavaScript framework for building user interfaces)
- Typescript (for type protection and better developer experience)
- PlayWright (for end-to-end testing)
- Markdown with frontmatter (for writing content in a simple and readable format and adding metadata)

You should _always_ adhere to the existing tech stack unless absolutely necessary. CSS frameworks should be avoided, instead prefer writing custom CSS in Vue components or adjusting the css of the Vitepress theme.

### CI/CD Tools

The following CI/CD tools are used in this project:

- GitHub Actions (for CI/CD)
- GitHub Pages (for hosting the website)

### Auxiliary tools

The following auxiliary tools are used in the development process:

- NVM (Node Version Manager, for managing Node.js versions)
- Prettier (for code formatting)
- VSCode (as the main IDE)
- Git (for version control)
- Dependabot (for dependency management)

## Project Structure

- `curriculum/`: Contains files related to the personal curriculum section of the website.
- `posts/`: Contains markdown files for blog posts.
- `pt/`: Contains Portuguese version of the website content, replicating the previous structure within itself.
- `.vitepress/`: Contains configuration files and custom theme components for Vitepress.
- `public/`: Contains static assets like images and fonts.
- `tests/`: Contains end-to-end tests for the website.
- `.vscode/`: Contains VSCode-specific settings and configurations.
- `.github/`: Contains GitHub-specific files, including workflows for CI/CD and issue templates.
