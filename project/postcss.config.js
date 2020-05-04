module.exports = {
  plugins: [
    require("autoprefixer"),
    require("postcss-nested"),
    require("tailwindcss")("./src/tailwind.config.js"),
  ],
}
