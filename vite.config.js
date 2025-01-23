import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Importar el módulo path

export default defineConfig({
  plugins: [react()],
  base: "/miRecetario/",
  build: {
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
