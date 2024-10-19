import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  return {
    plugins: [react(), tsconfigPaths()],
    root: "src",
    build: {
      emptyOutDir: true,
    },
    server: {
      host: "0.0.0.0",
      port: Number(env.VITE_PORT),
      strictPort: true,
    },
    preview: {
      port: Number(env["VITE_PREVIEW_PORT"]),
    },
    test: {
      environment: "jsdom",
      setupFiles: ["./ts/__testing__/vitest-setup.ts"],
    },
  };
});
