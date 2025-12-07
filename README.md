# Collaboration Guide

Welcome to `integral-limit`. This project is a React + TypeScript app powered by Vite and TailwindCSS. Use this guide to get set up, contribute changes, and keep the workflow consistent.

## Quick start
- Prereqs: Node 20+ or Bun 1.3+, git.
- Install deps: `bun install`.
- Run dev server: `bun run dev` (Vite).
- Lint: `bun run lint`.
- Build: `bun run build`; preview: `bun run preview`.

## Git Basics for Beginners
If you're new to Git, here's a quick guide to committing changes:

1. **Check status**: Run `git status` to see what files you've changed, added, or deleted.
2. **Stage changes**: Use `git add <filename>` to stage specific files, or `git add .` to stage all changes.
3. **Commit**: Run `git commit -m "Your message here"` to save your changes with a descriptive message.
4. **View history**: Use `git log` to see past commits.

Remember to commit often with clear messages. For this project, follow Conventional Commits (see below).

## Branching and commits
- Branch from `master` using `feat/<topic>`, `fix/<issue>`, or `chore/<task>`.
- Use Conventional Commits (e.g., `feat: add limit plot`), keep scope small, and rebase before opening a PR.

### Creating and working with branches (Beginners)
1. **Create a new branch**: `git checkout -b feat/add-new-feature` (creates and switches to a new branch).
2. **Switch branches**: `git checkout <branch-name>` (e.g., `git checkout master` to go back).
3. **Push your branch**: After committing, run `git push -u origin <branch-name>` to upload it to GitHub.
4. **Merge or rebase**: Before PR, rebase on master: `git rebase master` (or merge if preferred).

## Pull requests
- Include purpose, screenshots of UI changes, and a short testing note.
- Ensure `bun run lint` and relevant checks pass locally.
- Keep PRs focused; prefer follow-ups over large mixed changes.

### Creating a Pull Request (Beginners)
1. **Push your branch** to GitHub (see above).
2. **Go to the repo** on GitHub and click "Compare & pull request" (or "New pull request").
3. **Fill in details**: Title (e.g., "feat: add limit plot"), description with what changed and why, link to issues if applicable.
4. **Add reviewers** and labels if needed.
5. **Submit** and wait for review. Address feedback by committing fixes to the same branch.

## Code style
- TypeScript + React 19; prefer function components and hooks.
- TailwindCSS for styling; colocate component styles when practical.
- Run ESLint before pushing; avoid disabling rules without context.

## Testing and verification
- Add or update tests alongside features (testing stack TBD; note coverage in PRs).
- Manually verify user-facing flows touched by your change.

## Environment and tooling
- Use `bun add <pkg>` / `bun remove <pkg>` for dependencies.
- Environment variables follow Vite conventions (`.env.local` for secrets, `VITE_` prefix for client exposure).

## Issue handling
- Start with a short plan in the issue or PR description.
- Raise blockers early; document decisions in the PR thread for future contributors.
