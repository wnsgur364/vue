import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import legacy from "@vitejs/plugin-legacy";
import vue2 from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue2(),
    legacy({
      targets: ["ie >= 11"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  // build: {
  //   outDir: "../../../SpringBoot/prj_spring_orange/backend/src/main/resources/static",
  // }, // 빌드 결과물이 생성되는 경로
  // server: {
  //   proxy: {
  //     "/api": "http://localhost:8080",
  //   }, // proxy 설정
  // },
});
