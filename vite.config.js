import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Importar el módulo path

export default defineConfig({
  plugins: [react()],
  base: "/miRecetario/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // Alias para la carpeta 'src'
      componentes: path.resolve(__dirname, "src/componentes"), // Alias específico para componentes
    },
  },
});
