/** @type {import('tailwindcss').Config} */
import typography from "@tailwindcss/typography";
const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "100%", // ensures full width
            pre: {
              backgroundColor: "#1e1e1e",
              color: "#fff",
              padding: "1rem",
              borderRadius: "0.5rem",
              overflowX: "auto", // ✅ horizontal scroll
            },
            code: {
              backgroundColor: "#1e1e1e",
              color: "#fff",
              padding: "0.2rem 0.4rem",
              borderRadius: "0.25rem",
            },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
