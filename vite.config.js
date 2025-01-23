import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Importar el módulo path

export default defineConfig({
  plugins: [react()],
  base: "https://ThaliaOlvera.gitlab.io/miRecetario",
});
