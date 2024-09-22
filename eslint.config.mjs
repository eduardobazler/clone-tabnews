export default [
  {files: ["**/*.{js,mjs,cjs}"]},
  {
    ignores: ["**/tests/**", ".next"],
  },
  {
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error"
    }
  }
];