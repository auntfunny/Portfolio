import { defineConfig, resolveConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import { resolve } from 'path';
export default defineConfig({
  plugins: [tailwindcss()],
  build:{
    roolupOptions:{
      input:{
        main: resolve(__dirname,'index.html'),
        projects: resolve(__dirname, 'pages/my_projects.html'),
        links: resolve(__dirname, 'pages/social_links.html')
      }
    }
  }
});

