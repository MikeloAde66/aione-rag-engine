# NPM Scripts Reference

Quick reference for all available npm commands in Q-rator.

## Development

### Start Development Server
```bash
npm run dev
```
- Starts Vite dev server with hot module replacement
- Opens browser automatically at http://localhost:3000
- Changes to code update instantly in browser

## Building

### Create Production Build
```bash
npm run build
```
- Compiles TypeScript to JavaScript
- Bundles and minifies all code
- Optimizes assets
- Output goes to `/dist` folder

### Preview Production Build
```bash
npm run preview
```
- Serves the production build locally
- Use this to test before deployment
- Runs on http://localhost:4173 by default

## Code Quality

### Run Linter
```bash
npm run lint
```
- Checks code for errors and style issues
- Uses ESLint with TypeScript rules
- Helps maintain code quality

## Package Management

### Install Dependencies
```bash
npm install
```
- Installs all packages from package.json
- Run this first before starting development
- Creates node_modules folder

### Update Dependencies
```bash
npm update
```
- Updates packages to latest compatible versions
- Respects version ranges in package.json

### Check for Outdated Packages
```bash
npm outdated
```
- Shows which packages have newer versions available

## Cleaning

### Remove Dependencies
```bash
# Windows
rmdir /s node_modules
del package-lock.json

# Mac/Linux
rm -rf node_modules package-lock.json
```

### Fresh Install
```bash
rm -rf node_modules package-lock.json
npm install
```

## Common Workflows

### First Time Setup
```bash
npm install
npm run dev
```

### Before Deployment
```bash
npm run lint
npm run build
npm run preview
```

### After Pulling Updates
```bash
npm install  # Install any new dependencies
npm run dev
```

### Fix Issues
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

## Environment

### Check Node Version
```bash
node --version
# Should be 18.x or higher
```

### Check npm Version
```bash
npm --version
```

## Quick Tips

1. **Always run `npm install` after pulling code**
2. **Use `npm run dev` during development**
3. **Use `npm run build` before deploying**
4. **Check `npm run preview` to test production build**
5. **Run `npm run lint` to catch errors early**

---

For more details, see package.json for the full script definitions.
