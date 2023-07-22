import firebase from "firebase";

const messaging = firebase.messaging({
  apiKey: "AIzaSyAol_fATQ8OuBQRALAo_o7pFSE_01-_W3g",
  authDomain: "e-commerce-social-media-webapp.firebaseapp.com",
  projectId: "e-commerce-social-media-webapp",
  storageBucket: "e-commerce-social-media-webapp.appspot.com",
  messagingSenderId: "894487759666",
  appId: "1:894487759666:web:806b8c0b904b954a4a252b",
  measurementId: "G-18THWBJCKC",
});

const sendMessage = async (userId, message) => {
  const token = await messaging.getToken(userId);
  if (token) {
    await messaging.sendMessage({
      to: token,
      notification: {
        title: "New Message",
        body: message,
      },
    });
  }
};

const main = async () => {
  await sendMessage("1234567890", "Hello!");
};

main();
