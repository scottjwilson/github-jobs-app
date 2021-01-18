import Typography from "typography";
const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  headerFontFamily: ["Helvetica", "Arial", "sans-serif"],
  bodyFontFamily: ["Kumbh Sans", "Georgia", "serif"],
  googleFonts: [
    {
      name: "Kumbh Sans",
      styles: ["400", "400i", "700", "700i"],
    },
  ],
});

typography.injectStyles();
