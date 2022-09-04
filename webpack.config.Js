const path = require("path");

module.exports = {
  entry: {
    index: { import: "./src/index.js", filename: "script.js" },
    // auth: { import: "./src/auth.js", filename: "auth.js" },
  },
  output: {
    path: path.resolve(__dirname, "dist/js"),
    // filename: "script.js",
  },
  devtool: "eval-source-map",
  watch: true,
};
