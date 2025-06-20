import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    host: true, // Permite acceso desde otras IPs en la red
    port: 5173, // Puedes cambiar el puerto si lo necesitas
    strictPort: true, // Si el puerto está ocupado, no elige otro automáticamente
  },
});
