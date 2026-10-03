import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBsKf-e29fNxm1ZQ1X7cxCW9Zed5-6Rt6w",
  authDomain: "join-kanban-board-db3a0.firebaseapp.com",
  databaseURL:
    "https://join-kanban-board-db3a0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "join-kanban-board-db3a0",
  storageBucket: "join-kanban-board-db3a0.firebasestorage.app",
  messagingSenderId: "1016284974493",
  appId: "1:1016284974493:web:ac0cfd59534e5d622c3374",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function postDataAuth(path, data, token) {
  let response = await fetch(`${BASE_URL}${path}.json?auth=${token}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    console.error("Error posting authenticated data:", response.statusText);
    return;
  }

  return await response.json();
}

async function getDataAuth(path, token) {
  const response = await fetch(`${BASE_URL}${path}.json?auth=${token}`);

  if (!response.ok) {
    throw new Error("Error fetching authenticated data");
  }

  return await response.json();
}

export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  postDataAuth,
  getDataAuth,
};
