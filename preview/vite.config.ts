import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import UnoCSS from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
const pathSrc = path.resolve(__dirname, "src");
// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  resolve: {
    alias: {
      "~/": `${pathSrc}/`
    }
  },
  server: {
    host: "0.0.0.0"
  },
  plugins: [
    vue(),
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      resolvers: [],
      dts: "src/components.d.ts"
    }),
    AutoImport({
      imports: ["vue", "@vueuse/core"],
      dts: true,
      dirs: ["./src/composables"],
      eslintrc: {
        enabled: true,
        globalsPropValue: true,
        filepath: "presets/eslint/.eslintrc-auto-import.json"
      },
      vueTemplate: true
    }),
    UnoCSS()
  ]
});
