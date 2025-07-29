import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
return {
plugins: [
react(),
runtimeErrorOverlay(),
...(process.env.NODE_ENV !== "production" && process.env.REPL_ID !== undefined
? [(await import("@replit/vite-plugin-cartographer")).cartographer()]
: []),
],
resolve: {
alias: {
"@": path.resolve(__dirname, "src"),
// Adjust or remove "@shared" or "@assets" aliases if those folders are outside client/
        // or move them inside client/src or client/public
      },
},
root: __dirname,
build: {
outDir: path.resolve(__dirname, "dist"),
emptyOutDir: true,
},
server: {
fs: {
strict: true,
deny: ["**/.*"],
},
},
};
});
