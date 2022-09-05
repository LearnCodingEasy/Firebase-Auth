// call Object from the Firebase to Initialize app
import { initializeApp } from "firebase/app";

// ! Data Base
// Import Data Base
import { getFirestore } from "firebase/firestore";

// Import Collection
import { collection } from "firebase/firestore";

// Import Object onSnapshot
import { onSnapshot } from "firebase/firestore";

// Import Object Add Doc
import { addDoc } from "firebase/firestore";

// ! Auth
// Import Auth
import { getAuth } from "firebase/auth";

// Import create User With Email And Password
import { createUserWithEmailAndPassword } from "firebase/auth";

// Import Object Doc
import { doc } from "firebase/firestore";

// Import Object setDoc
import { setDoc } from "firebase/firestore";

// Import sign Out
import { signOut } from "firebase/auth";

// Import sign In With Email And Password
import { signInWithEmailAndPassword } from "firebase/auth";

// Import on Auth State Changed
import { onAuthStateChanged } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDaE_jzfm6HpVsD93WBv9YeoS0PyyK_8ew",
  authDomain: "fir-auth-4dad2.firebaseapp.com",
  projectId: "fir-auth-4dad2",
  storageBucket: "fir-auth-4dad2.appspot.com",
  messagingSenderId: "502138293740",
  appId: "1:502138293740:web:de9346789ae040afb284c9",
  measurementId: "G-BEV3RPHDR5",
};

// initialize firebase App
initializeApp(firebaseConfig);

//! init services ( Database )
const Database = getFirestore();

//! Call Object From The Firebase To Initialize Services ( Auth )
const Auth = getAuth();
console.log("Auth: ", Auth);

// signup
const signupForm = document.querySelector("#signup-form");
signupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // get user info
  const email = signupForm["signup-email"].value;
  const password = signupForm["signup-password"].value;
  const displayName = signupForm["signup-name"].value;
  const phoneNumbers = signupForm["signup-phoneNumber"].value;

  // sign up the user
  createUserWithEmailAndPassword(Auth, email, password).then(async (cred) => {
    console.log("cred User :", cred.user);
    let credUser = cred.user;
    if (true) {
      await addUser(
        credUser.uid,
        credUser.email,
        (credUser.displayName = displayName),
        // User Info
        credUser.photoURL,
        (credUser.phoneNumber = phoneNumbers),
        credUser.accessToken,
        credUser.emailVerified,
        credUser.isAnonymous,
        credUser.tenantId,
        // credUser.metadata,
        credUser.metadata.createdAt,
        credUser.metadata.creationTime,
        credUser.metadata.lastLoginAt,
        credUser.metadata.lastSignInTime
      );
    } else {
      console.log("User already exists");
    }

    // close the signup modal & reset form
    const modal = document.querySelector("#modal-signup");
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});

const addUser = async (
  userId = "userId",
  email = "email",
  displayName = "displayName",
  photoURL = "chrome://favicon2/?size=24&scaleFactor=1x&showFallbackMonogram=&pageUrl=https%3A%2F%2Fwww.google.com%2F%3Fauthuser%3D1",
  phoneNumber = "phoneNumber",
  accessToken = "",
  emailVerified = false,
  isAnonymous = false,
  tenantId = null,
  metadata = "",
  createdAt = "",
  creationTime = "",
  lastLoginAt = "",
  lastSignInTime = "",
  ...userInfo
) => {
  const userRef = doc(Database, "users", userId);
  return await setDoc(userRef, {
    userId: userId,
    email: email,
    displayName: displayName,
    // user Info
    userInfo: {
      photoURL: photoURL,
      phoneNumber,
      accessToken,
      emailVerified,
      isAnonymous,
      tenantId,
      metadata,
      createdAt,
      creationTime,
      lastLoginAt,
      lastSignInTime,
    },
  });
};

// logout
const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
  e.preventDefault();
  signOut(Auth);
});

// login
const loginForm = document.querySelector("#login-form");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // get user info
  const email = loginForm["login-email"].value;
  const password = loginForm["login-password"].value;

  // log the user in
  signInWithEmailAndPassword(Auth, email, password)
    .then((cred) => {
      console.log("cred.user: ", cred.user);
      // close the signup modal & reset form
      const modal = document.querySelector("#modal-login");
      M.Modal.getInstance(modal).close();
      loginForm.reset();
    })
    .catch((err) => {
      console.log("err: ", err);
    });
});

// Get The Collection From Database by Collection Name
// collection ref
const colRefGuides = collection(Database, "guides");

// DOM elements
const guideList = document.querySelector(".guides");

async function showItems(items) {
  if (items.length) {
    items.forEach((item) => {
      const { title, content } = item;
      let El = document.createElement("li");
      El.innerHTML = `
    <div class="collapsible-header grey lighten-4"> ${title} </div>
    <div class="collapsible-body white"> ${content} </div>
    `;
      guideList.appendChild(El);
    });
  } else {
    guideList.innerHTML = '<h5 class="center-align">Login to view guides</h5>';
  }
}

const accountDetails = document.querySelector(".account-details");

// subscribing to auth changes
onAuthStateChanged(Auth, async (user) => {
  if (user) {
    // setup guides
    let allItems = [];
    // realtime collection data
    onSnapshot(colRefGuides, async (items) => {
      items.docs.forEach((item) => {
        allItems.push({ ...item.data(), id: item.id });
      });
      await setupUI(user);
      await showItems(allItems);
    });
    // account info
    const html = `
      <div>Logged in as ${user.email}</div>
      <div>Logged in as ${user.displayName}</div>
      <div>Logged in as ${user.phoneNumber}</div>
      <div>Logged in as ${user.email}</div>
    `;
    accountDetails.innerHTML = html;
  } else {
    console.log(` User Logout `);
    // clear account info
    accountDetails.innerHTML = "";
    await setupUI(user);
    await showItems([]);
  }
});

// Firebase Rules

/*
*** تسمح للمستخدمين المسجلين فى الموقع لاقراءة و الكتابة
match /guides/{guideId} {
	allow read, write: if request.auth != null;
}
*/

//! Work With Navbar
const loggedOutLinks = document.querySelectorAll(".logged-out");
const loggedInLinks = document.querySelectorAll(".logged-in");

const setupUI = async (user) => {
  if (user) {
    // toggle user UI elements
    loggedInLinks.forEach((item) => (item.style.display = "block"));
    loggedOutLinks.forEach((item) => (item.style.display = "none"));
  } else {
    // toggle user elements
    loggedInLinks.forEach((item) => (item.style.display = "none"));
    loggedOutLinks.forEach((item) => (item.style.display = "block"));
  }
};

//! Add Product
// create new guide
const createForm = document.querySelector("#create-form");
createForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRefGuides, {
    title: createForm.title.value,
    content: createForm.content.value,
  })
    .then(() => {
      // close the create modal & reset form
      const modal = document.querySelector("#modal-create");
      M.Modal.getInstance(modal).close();
      createForm.reset();
    })
    .catch((err) => {
      console.log(err.message);
    });
});
