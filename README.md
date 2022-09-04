# Firebase-Auth

## Go To project Name

> cd projectName

### Create

- Src >
  - index.js
- Dist >
  - index.html

## Work With Webpack

#### Project Start

```text
npm init -y
```

**This Is Create File Package.json**

#### Install Webpack & Webpack-Cli

```text
npm i webpack webpack-cli -D
```

**This Is Create Folder node_modules**

#### Create a File Named Webpack.Config.Js

```text
Webpack.Config.Js
```

#### Inside File Webpack.Config.Js
  
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

#### Run Webpack inside file Package.Json  In To Scripts command

```text
"build": "webpack --mode=development"
```

#### Run Project

```text
npm run build
```

#### Watch Video

[Youtube Pages](https://www.youtube.com/watch?v=vDuXmQPcSL0&feature=emb_imp_woyt)
