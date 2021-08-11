import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import { babel } from "@rollup/plugin-babel";

export default defineConfig({
  plugins: [
    reactRefresh(),
    babel({
      include: ["./src/**"],
      extensions: [".js", ".ts", ".jsx", ".tsx"],
      babelHelpers: "bundled",
    }),
  ],
});
