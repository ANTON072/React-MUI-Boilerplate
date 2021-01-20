module.exports = {
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
    "plugin:@typescript-eslint/recommended",
    "plugin:jest/recommended",
    "prettier",
    "prettier/react",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  plugins: ["react", "@typescript-eslint", "jest"],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
    project: "./tsconfig.json",
  },

  rules: {
    "react/react-in-jsx-scope": "off",
    "react/prop-types": ["off"],
    "react/jsx-props-no-spreading": "off",
    "linebreak-style": "off",
    "prettier/prettier": [
      "error",
      {
        bracketSpacing: true,
        printWidth: 80,
        endOfLine: "auto",
        semi: false,
        singleQuote: false,
        trailingComma: "all",
        useTabs: false,
      },
    ],
  },

  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx", ".js", ".jsx"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", "jsx", ".ts", ".tsx"],
        paths: ["."],
      },
    },
    react: {
      version: "detect",
    },
  },
};
