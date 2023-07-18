<script src="https://www.gstatic.com/firebasejs/7.21.0/firebase.js"></script>
<script>
firebaseConfig() {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAol_fATQ8OuBQRALAo_o7pFSE_01-_W3g",
    authDomain: "e-commerce-social-media-webapp.firebaseapp.com",
    projectId: "e-commerce-social-media-webapp",
    storageBucket: "e-commerce-social-media-webapp.appspot.com",
    messagingSenderId: "894487759666",
    appId: "1:894487759666:web:806b8c0b904b954a4a252b",
    measurementId: "G-18THWBJCKC"
  };
}
firebase.initializeApp(firebaseConfig);

// Save signup data to Firebase Realtime Database
const signupData = {
  username: 'username',
  email: 'email@example.com',
  password: 'password',
};
firebase.database().ref('users').child(signupData.username).set(signupData);

// Save profile image to Firebase Storage
const profileImage = document.getElementById('profile-image');
const profileImageUrl = await profileImage.files[0].upload('profile-images');
firebase.database().ref('users').child(signupData.username).child('profileImageUrl').set(profileImageUrl);
</script>
