import type { Config } from "tailwindcss";

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        // Enlazamos con las variables del CSS
        primary: "var(--color-primary)",
        secondary: "var(--color-text-secondary)",
        detail: "var(--color-accent-pink)",
        "slate-main": "var(--color-text-main)",
      },
      backgroundColor: {
        "dark-deep": "var(--color-bg)",
      },
    },
  },
};
