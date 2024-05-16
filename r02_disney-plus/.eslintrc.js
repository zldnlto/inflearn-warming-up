module.exports = {
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:tailwindcss/recommended",
    "eslint-config-prettier",
  ],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "error",
    "no-unused-vars": "off",
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "import/no-extraneous-dependencies": "off",
    "no-else-return": "off",
  },
  settings: {},
};
