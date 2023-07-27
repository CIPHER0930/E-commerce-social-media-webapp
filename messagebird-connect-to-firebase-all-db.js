code to link the database to MessageBird and connect all users in the database to message, view uploads, and video chat with each other:

import firebase from "firebase/app";
import messagebird from "messagebird";

const firebaseConfig = {
  apiKey: "AIzaSyAol_fATQ8OuBQRALAo_o7pFSE_01-_W3g",
  authDomain: "e-commerce-social-media-webapp.firebaseapp.com",
  projectId: "e-commerce-social-media-webapp",
  storageBucket: "e-commerce-social-media-webapp.appspot.com",
  messagingSenderId: "894487759666",
  appId: "1:894487759666:web:806b8c0b904b954a4a252b",
  measurementId: "G-18THWBJCKC",
};

const messagebirdKey = "25df6b94-545d-4cba-9ae1-e4b3d4a47e6d";

const firebaseApp = firebase.initializeApp(firebaseConfig);
const messageBird = new messagebird(messagebirdKey);

const connectUsers = async () => {
  const users = await firebaseApp.database().ref("users").get();

  for (const user of users.val()) {
    const phoneNumber = user.phoneNumber;

    // Create a MessageBird message.
    const message = {
      phoneNumber: phoneNumber,
      text: "Welcome to the e-commerce social media webapp!",
    };

    // Send the message to MessageBird.
    await messageBird.sendMessage(message);
  }
};

connectUsers();
