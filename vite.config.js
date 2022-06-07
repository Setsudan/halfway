import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      includeAssets: [
        // Images et autres fichiers
      ],
      manifest: {
        name: "Projet de fin d'année",
        short_name: "PFA",
        description: "Projet professionnel @hetic",
        theme_color: "#111111",
        icons: [
          // Icones de l'application
          /* {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable",
          }, */
        ],
      },
    }),
  ],
});
