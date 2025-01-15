module.exports = {
  content: [
    "./index.html", // HTML dosyasını dahil edin
    "./src/**/*.{js,jsx,ts,tsx}", // React dosyaları
  ],
  theme: {
    extend: {
      colors: {
        background: "#f8fafc",
        primary: "#3b82f6",
        secondary: "#9333ea",
        accent: "#10b981",
        muted: "#9ca3af",
      },
    },
  },
  plugins: [],
};
