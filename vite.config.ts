import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";

export default defineConfig({
  server: {
    port: 1234,
    strictPort: false,
    proxy: {
      '/api': {
        target: 'https://test.gnzs.ru/oauth/get-token.php',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        headers: {
          "X-Client-Id": "30878566",
          "Content-Type": "application/json"
        }
      },
    }
  },
  define: {
    global: {
      base: "red",
    },
  },
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/variables.scss";
         `,
      },
    },
  },
});
