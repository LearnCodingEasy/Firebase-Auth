# Firebase-Auth

## Go To project Name

> cd projectName

## Work With Webpack

1. Project Start

```text
npm init -y
```

1. Install Webpack & Webpack-Cli

```text
npm i webpack webpack-cli -D
```

1. Create a File Named Webpack.Config.Js

```text
Webpack.Config.Js
```

1. Inside File Webpack.Config.Js
  
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

1. Run Webpack inside file Package.Json  In To Scripts command

```text
"build": "webpack --mode=development"
```

1. Run Project

```text
npm run build
```

1. Watch Video

[Youtube Pages](https://www.youtube.com/watch?v=vDuXmQPcSL0&feature=emb_imp_woyt)
