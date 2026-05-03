# VigridWikiAngular

This project features an **Angular frontend** and a **Node.js backend** (Express).

## Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org) and the [Angular CLI](https://angular.dev) installed:
### Installation
1. Clone the repository.
2. Install the Angular CLI globally (if you haven't already):
   ```bash
   npm install -g @angular/cli
   ```
3. Install the project dependencies:
   ```bash
   npm install
   ```

## Local Development

To run the project locally, follow these steps:

### 1. Run Both Servers Simultaneously
The project is configured to start the **Angular frontend** (with automatic browser opening) and the **Node.js backend** at the same time:

```bash
npm run dev
```

**What this command does:**
- **Frontend (`ng serve -o`):** Compiles the app, starts a dev server at `http://localhost:4200/`, and opens your default browser.
- **Backend (`node src/app/server.js`):** Starts your Node.js server to handle API requests.

---

### Alternative: Running them separately
If you prefer to run them in two different terminal windows:

**Terminal 1 (Frontend):**
```bash
ng serve -o
```

**Terminal 2 (Backend):**
```bash
node src/app/server.js
```

## Project Structure
- `src/app/server.js`: Node.js server entry point.
- `src/`: Angular application source code.
- `public/`: Static assets for the application.

## Build and Deployment
To build the project for production:
```bash
ng build
```
The build artifacts (minified HTML, CSS, and JS) will be stored in the `dist/` directory. These are the files you deploy to a production server.

---
*Maintained by the VigridWiki Team.*