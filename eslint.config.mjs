import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin"; // Correct import
import pluginReact from "eslint-plugin-react";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser, // Cấu hình global cho môi trường browser
    },
    plugins: {
      '@typescript-eslint': tseslint, // Khai báo plugin TypeScript
      'react': pluginReact,          // Khai báo plugin React
    },
    rules: {
      ...pluginJs.configs.recommended.rules,  // Các quy tắc mặc định của ESLint
      ...tseslint.configs.recommended.rules,  // Các quy tắc của TypeScript
      ...pluginReact.configs.flat.recommended.rules, // Các quy tắc của React
    },
  }
];
