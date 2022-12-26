import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      exportAsDefault: true
    }),
    VitePWA({
      registerType: "autoUpdate"
    })
  ],
  css: {
    modules: {
      localsConvention: "camelCase"
    }
  },
  base: "/todo-list"
});
