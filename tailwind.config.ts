import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        cardBg: "var(--cardBackground)",
        cardTextColor: "var(--cardTextColor)",
      },
      padding: {
        cardPadding: "var(--cardPadding)",
      },
      borderRadius: {
        cardBorderRadius: "var(--cardBorderRadius)",
      },
      fontSize: {
        // Heading sizes
        h1: ["2.25rem", { lineHeight: "2.5rem" }], // 36px
        h2: ["1.875rem", { lineHeight: "2.25rem" }], // 30px
        h3: ["1.5rem", { lineHeight: "2rem" }], // 24px
        h4: ["1.25rem", { lineHeight: "1.75rem" }], // 20px
        h5: ["1.125rem", { lineHeight: "1.5rem" }], // 18px
        h6: ["1rem", { lineHeight: "1.25rem" }], // 16px

        // Body text
        p: ["1rem", { lineHeight: "1.75rem" }], // 16px
        subtitle: ["0.875rem", { lineHeight: "1.25rem" }], // 14px
        caption: ["0.75rem", { lineHeight: "1.15rem" }], // 12px
      },
    },
  },
  plugins: [],
};
export default config;
