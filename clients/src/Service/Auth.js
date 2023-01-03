
import { GoogleAuthProvider, getAuth, signInWithPopup,signOut  } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4",
  authDomain: "wassotube-aca0b.firebaseapp.com",
  projectId: "wassotube-aca0b",
  storageBucket: "wassotube-aca0b.appspot.com",
  messagingSenderId: "872311423051",
  appId: "1:872311423051:web:b1b8dbf81ba71548384dce"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
  const auth = getAuth();

//   const [authorizedUser,setAuthorizedUser] = useState(false || sessionStorage.getItem("accessToken"));

  export function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        // Access token of user
        

        const name = result.user.displayName;
        const email = result.user.email;
        const profilePic = result.user.photoURL;
        const token = credential.accessToken;
      localStorage.setItem("profilName", name)
      localStorage.setItem("image", profilePic); 
      localStorage.setItem("token", token); 


        // The signed-in user info.
        const user = result.user;
        console.log(user)
        if(user){
          user.getIdToken().then((tkn)=>{
            // set access token in session storage
            sessionStorage.setItem("accessToken", tkn);
            // setAuthorizedUser(true);
          })
        }
        
        console.log(user);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }


  export function logOutFirebase(){
    signOut(auth).then(() => {      
      // clear session storage
      sessionStorage.clear();
      // window.location.replace("/");
      alert('Logged Out Successfully');
    }).catch((error) => {
      // An error happened.
      alert(error);
    });
  }
 














// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from  'firebase/auth'

// const firebaseConfig = {
//   apiKey: "AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4",
//   authDomain: "wassotube-aca0b.firebaseapp.com",
//   projectId: "wassotube-aca0b",
//   storageBucket: "wassotube-aca0b.appspot.com",
//   messagingSenderId: "872311423051",
//   appId: "1:872311423051:web:b1b8dbf81ba71548384dce"
// };


// const app = initializeApp(firebaseConfig);

// export const auth = getAuth(app)
// export const provider = new GoogleAuthProvider();

// // AddScope 
// provider.addScope('https://www.googleapis.com/auth/youtube')
// export const signInWithGoogle = () => {
//   signInWithPopup(auth, provider).then((result)=>{
      
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//       const name = result.user.displayName;
//       const email = result.user.email;
//       const profilePic = result.user.photoURL;
//       const token = credential.accessToken;
//       localStorage.setItem("profilName", name)
//       localStorage.setItem("token", token) // Ajout token 
//       localStorage.setItem("image", profilePic)
//   }).catch(error => console.log(error))
// }

// export const SignOut = ()=>{
//   signOut(auth).then(() => {
//   console.log('Sign Out reussi')
// }).catch((error) => {
//   // An error happened.
// });
// }


