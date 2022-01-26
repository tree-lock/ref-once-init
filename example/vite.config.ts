import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import viteSvgIcons from "vite-plugin-svg-icons";
import styleImport, { ElementPlusResolve } from "vite-plugin-style-import";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteSvgIcons({
      iconDirs: [path.resolve(process.cwd(), "public/svg")],
      symbolId: "icon-[dir]-[name]",
    }),
    AutoImport({
      imports: ["vue"],
      resolvers: [ElementPlusResolver()],
      dts: "src/auto-imports.d.ts",
    }),
    Components({
      resolvers: [ElementPlusResolver()],
      dts: "src/components.d.ts",
    }),
    styleImport({
      resolves: [ElementPlusResolve()],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(path.join(__dirname, "src")),
    },
  },
});
