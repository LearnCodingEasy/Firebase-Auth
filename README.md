
# Work With Firebase

## Go To Firebase To Create Project

[Firebase console](https://console.firebase.google.com/)

### Install Firebase

```text
npm install firebase
```

### In Side File Auth.js

```text
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "*****",
  authDomain: "*****",
  projectId: "*****",
  storageBucket: "*****",
  messagingSenderId: "*****",
  appId: "*****",
  measurementId: "*****"
};
```

### Install Firebase CLI

```text
npm install -g firebase-tools
```

### Initialize your project

```text
firebase login
```

```text
firebase init
```

1. Firebase Hosting & a
   - ? Are you ready to proceed? (Y/n) Y
   - Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. (Press to select, to toggle all, to invert selection, and  to proceed)

    - [ ] Realtime Database: Configure a security rules file for Realtime Database and (optionally) provision default instance
    - [x] Firestore: Configure security rules and indexes files for Firestore
    - [x] Functions: Configure a Cloud Functions directory and its files
    - [x] Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys
    - [x] Hosting: Set up GitHub Action deploys
    - [x] Storage: Configure a security rules file for Cloud Storage(Move up and down to reveal more choices)

    - Please select an option: (Use arrow keys)
    > Use an existing project

    - ? Select a default Firebase project for this directory: (Use arrow keys)
    > Select Firebase Project

    - ? What file should be used for Firestore Rules? (firestore.rules)
    > Enter

    - ? What file should be used for Firestore indexes? (firestore.indexes.json)
    > Enter

    - ? What language would you like to use to write Cloud Functions? (Use arrow keys)
    > javascript

    - ? Do you want to use ESLint to catch probable bugs and enforce style? (y/N)
    > Y

    - ? Do you want to install dependencies with npm now? (Y/n)
    > Y

    - ? What do you want to use as your public directory? (public)
    > dist

    - ? Configure as a single-page app (rewrite all urls to /index.html)? (y/N)
    > N

    - ? Set up automatic builds and deploys with GitHub? (y/N)
    > Y

    - ? File dist/index.html already exists. Overwrite? (y/N)
    > n

    - ? For which GitHub repository would you like to set up a GitHub workflow? (format: user/repository)
    > LearnCodingEasy/Firebase-Auth

    - ? Set up the workflow to run a build script before every deploy? (y/N)
    > y

    - ? What script should be run before every deploy? (npm ci && npm run build)
    > npm run build

    - ? Set up automatic deployment to your site's live channel when a PR is merged? (Y/n)
    > y

    - ? What is the name of the GitHub branch associated with your site's live channel? (main)
    > main

    - ? What file should be used for Storage Rules? (storage.rules)
    > Enter

    firebase deploy
