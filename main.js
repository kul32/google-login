import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth ,GoogleAuthProvider ,signInWithPopup } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";
const firebaseConfig = {
apiKey: "AIzaSyD3JTodu1t0lmsbo2NHG6BGIU4g7Cb1ggM",
authDomain: "login-bec22.firebaseapp.com",
projectId: "login-bec22",
storageBucket: "login-bec22.appspot.com",
messagingSenderId: "468558707938",
appId: "1:468558707938:web:47b194559d1aea08c1f2bb"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
auth.languageCode = 'en';
const provider = new GoogleAuthProvider();
const googleLogin = document.getElementById("google-login-btn")
googleLogin.addEventListener("click", function(){
    signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const user = result.user;
    console.log(user);
    window.location.href = "../logged.html"
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
    alert('Click OK')
})
