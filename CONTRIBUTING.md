# Contributing Guide

## Branch Strategy

main  → production, receives merges from dev only
dev   → staging, receives merges from feature branches only

Never branch off main.
Never merge directly into main.
All work flows: your branch → dev → main.


## Branch Naming

Pattern: type/issue-number-short-description

Types:
- feature  → new component or functionality
- fix      → bug or layout correction
- chore    → config, cleanup, refactoring, docs

Examples:
- feature/AST-6-header-component
- fix/AST-22-safari-layout
- chore/AST-29-code-cleanup

Always branch off dev:

git checkout dev
git pull origin dev
git checkout -b feature/AST-6-header-component


## JavaScript Conventions

| Thing              | Convention      | Example            |
|--------------------|-----------------|---------------------|
| Variables          | camelCase       | planetData          |
| Functions          | camelCase       | fetchPlanets()      |
| Components         | PascalCase      | PlanetCard.jsx      |
| Component files    | PascalCase      | PlanetCard.jsx      |
| Service files      | camelCase       | planetService.js    |
| Constants          | UPPER_SNAKE_CASE| API_BASE_URL        |
| CSS classes        | kebab-case      | planet-card         |


## Pull Request Rules

- One issue per PR — no bundling
- PR title format: "AST N — Short Description"
- Target branch is always dev, never main
- At least one teammate must approve before merging
- Never merge your own PR without a review
- Delete your branch after merging
- dev → main is opened by the team lead only


## Linting and Formatting

Run before pushing:

npm run lint
npm run format:check

Fix lint errors:

npm run lint:fix

Fix formatting:

npm run format

The CI pipeline runs on every push and PR.
A failing check blocks the PR from merging.
Fix all errors before requesting review.