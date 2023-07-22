import firebase from "firebase";

const messaging = firebase.messaging();

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

