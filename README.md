# Firebase-Auth

## Go To project Name

> cd projectName

## Work With Webpack

** Project Start

```text
npm init -y
```

** Install Webpack & Webpack-Cli

```text
npm i webpack webpack-cli -D
```

** Create a File Named Webpack.Config.Js

```text
Webpack.Config.Js
```

** Inside File Webpack.Config.Js
  
```text
const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist/js"),
    filename: "script.js",
  },
  devtool: "eval-source-map",
  watch: true,
};

```

** Run Webpack inside file Package.Json  In To Scripts command

```text
"build": "webpack --mode=development"
```

** Run Project

```text
npm run build
```

** Watch Video

[Youtube Pages](https://www.youtube.com/watch?v=vDuXmQPcSL0&feature=emb_imp_woyt)
