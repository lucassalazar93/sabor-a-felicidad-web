// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

// Definición compatible con ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Importar desde "@/components/..."
    },
  },
  server: {
    host: "0.0.0.0", // Asegura accesibilidad en red local
    port: 5173,
    strictPort: true,
  },
});
