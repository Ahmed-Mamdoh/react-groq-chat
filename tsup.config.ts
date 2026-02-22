import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  dts: true,
  splitting: false,
  sourcemap: true,
  clean: true,
  external: ["react", "react-dom"],
  minify: true,
  treeshake: true,
  // Handle TypeScript path aliases
  esbuildOptions: (options) => {
    options.alias = {
      "@": "./src",
    };
  },
});
