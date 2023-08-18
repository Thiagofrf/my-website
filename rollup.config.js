import scss from "rollup-plugin-scss"

export default {
  input: "./src/scripts/main.js",
  output: {
    file: "./build/js/main.min.js",
    format: "esm",
    // Removes the hash from the asset filename
    assetFileNames: "[name][extname]",
  },
  plugins: [
    scss({
      output: "./build/style.css",
      failOnError: true,
      runtime: require("sass"),
      outputStyle: "compressed",
    }), // will output compiled styles to output.css
  ],
}
