import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: "jsx", // Pastikan JSX bisa digunakan dalam file .js
    include: /src\/.*\.js$/, // Hanya untuk file di dalam src/
  },
});
