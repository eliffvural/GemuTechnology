import nextVitals from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextVitals,
  {
    ignores: [".next/**", "out/**", "build/**", "node_modules/**"],
  },
  {
    rules: {
      "@next/next/no-page-custom-font": "off",
      "react/no-unescaped-entities": "off",
      "react-hooks/set-state-in-effect": "off",
    },
  },
];

export default eslintConfig;
