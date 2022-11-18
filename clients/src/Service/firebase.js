
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from  'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4",
  authDomain: "wassotube-aca0b.firebaseapp.com",
  projectId: "wassotube-aca0b",
  storageBucket: "wassotube-aca0b.appspot.com",
  messagingSenderId: "872311423051",
  appId: "1:872311423051:web:b1b8dbf81ba71548384dce"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider();

// AddScope 
provider.addScope('https://www.googleapis.com/auth/youtube')
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider).then((result)=>{
      
    const credential = GoogleAuthProvider.credentialFromResult(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const token = credential.accessToken;
      localStorage.setItem("profilName", name)
      localStorage.setItem("token", token) // Ajout token 
      localStorage.setItem("image", profilePic)
  }).catch(error => console.log(error))
}

export const SignOut = ()=>{
  signOut(auth).then(() => {
  console.log('Sign Out reussi')
}).catch((error) => {
  // An error happened.
});
}


