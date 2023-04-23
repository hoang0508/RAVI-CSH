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
        "ravi-bg-EAE1D9": " #EAE1D9",
        "ravi-bg-D2EABD": "#D2EABD",
        "ravi-bg-FFF8F3": "#FFF8F3",
        "ravi-bg-BA1A1A": "#BA1A1A",
        "ravi-bg-EFE0CF": "#EFE0CF",
        "ravi-bg-817567": "#817567",
        "ravi-border-D2C4B4": "#D2C4B4",
        "ravi-border-817567": "#817567",
        "ravi-text-primary": "#805600",
        "ravi-text-black25": "#252525",
        "ravi-text-4F4539": "#4F4539",
        "ravi-text-281800": "#281800",
      },
      boxShadow: {
        shadownNoti: ` 0px 1px 2px rgba(0,0,0,0.3), 0px 1px 3px 1px rgba(0,0,0,0.15)`,
      },
    },
  },
  plugins: [],
};
