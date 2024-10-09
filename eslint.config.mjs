import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config({
  languageOptions: {
    parserOptions: {
      project: "./tsconfig.json",
      tsconfigRootDir: "./", // use `import.meta.url` for path
    },
  },
  files: ["**/*.ts"],
  extends: [
    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    eslintConfigPrettier,
  ],
  rules: {
    "no-console": "error",
    "no-useless-catch": "off", // Changed to 'off' for consistency
    quotes: ["error", "single", { allowTemplateLiterals: true }],
  },
});
