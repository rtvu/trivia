import { loadEnv } from "vite";
const env = loadEnv(process.cwd());
Number(env.VITE_PORT);

/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import("prettier").Config}
 */
const config = {
  plugins: ["prettier-plugin-organize-imports"],
  printWidth: 120,
};

export default config;
