module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: ["@nuxt/eslint-config", "prettier"],
  rules: {
    "vue/multi-word-component-names": "off", // Para permitir nombres como Hero.vue
    "no-console": process.env.NODE_ENV === "production" ? "error" : "warn",
  },
};
