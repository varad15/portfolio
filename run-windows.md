# Running the Portfolio on Windows

## Quick Start

Since you're on Windows, the `NODE_ENV` commands won't work directly. Here are the Windows-compatible commands:

### Method 1: Using cross-env (Recommended)
```bash
# Install cross-env globally
npm install -g cross-env

# Then run:
cross-env NODE_ENV=development npx tsx server/index.ts
```

### Method 2: Build and Run
```bash
# Build the project first
npm run build

# Then run the built version
node dist/index.js
```

### Method 3: Direct Development Server
```bash
# Run the TypeScript server directly
npx tsx server/index.ts
```

## What Each Method Does

- **Method 1**: Proper development mode with hot reloading
- **Method 2**: Production build (static files)
- **Method 3**: Basic development server

Try Method 3 first - it should work immediately!

## Expected Result
The server will start on `http://localhost:5000` and you'll see your portfolio website.