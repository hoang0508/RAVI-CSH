/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-notification":
          "linear-gradient(0deg,rgba(31,27,22,0.08),rgba(31,27,22,0.08),#FFFFFF)",
      },
      colors: {
        "ravi-bg-primary": "#805600",
        "ravi-bg-d2": "#D2EABD",
        "ravi-bg-ba": "#BABABA",
        "ravi-bg-f0f0f0": "#f0f0f0",
        "ravi-bg-FFDDB0": "#FFDDB0",
        "ravi-bg-EAE1D9": "#EAE1D9",
        "ravi-bg-D2EABD": "#D2EABD",
        "ravi-bg-FFF8F3": "#FFF8F3",
        "ravi-bg-BA1A1A": "#BA1A1A",
        "ravi-bg-EFE0CF": "#EFE0CF",
        "ravi-bg-817567": "#817567",
        "ravi-bg-EFE0CF": "#EFE0CF",
        "ravi-bg-F9DEBB": "#F9DEBB",
        "ravi-border-D2C4B4": "#D2C4B4",
        "ravi-border-817567": "#817567",
        "ravi-text-primary": "#805600",
        "ravi-text-black25": "#252525",
        "ravi-text-4F4539": "#4F4539",
        "ravi-text-281800": "#281800",
        "ravi-text-817567": "#817567",
        "ravi-text-FFF8F3": "#FFF8F3",
        "ravi-text-1F1B16": "#1F1B16",
        "ravi-bg-FFE5CC": "#FFE5CC",
        "ravi-text-CC6600": "#CC6600",
        "ravi-text-4F4539": "#4F4539",
        "ravi-text-D2C4B4": "#D2C4B4",
        "ravi-text-1A8A0F": "#1A8A0F",
        "ravi-text-666666": "#666666",
        "ravi-bg-D5FAD1": "#D5FAD1",
        "ravi-bg-F0F0F0": "#F0F0F0",
      },
      boxShadow: {
        shadownNoti: ` 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)`,
      },
    },
  },
  plugins: [],
};
