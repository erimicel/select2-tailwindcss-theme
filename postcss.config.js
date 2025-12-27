const cssnano = require("cssnano")({ preset: "default" });
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    require("autoprefixer"),
    ...(process.env.VERBOSE === "true" ? [tailwindcss] : []),
    ...(process.env.MINIFY === "true" ? [cssnano] : []),
  ],
};
