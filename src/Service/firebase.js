import firebase from 'firebase/compat/app'
import "firebase/compat/auth"

const firebaseConfig = {
  apiKey: "AIzaSyD1urvE483bNDXro5TsLXgTR27I8ivHAk4",
  authDomain: "wassotube-aca0b.firebaseapp.com",
  projectId: "wassotube-aca0b",
  storageBucket: "wassotube-aca0b.appspot.com",
  messagingSenderId: "872311423051",
  appId: "1:872311423051:web:b1b8dbf81ba71548384dce"
};

firebase.initializeApp(firebaseConfig)

export const auth= firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider();

provider.addScope('https://www.googleapis.com/auth/youtube.force-ssl')
export const signInWithGoogle= async ()=>{
  const response = await auth.signInWithPopup(provider);
  localStorage.setItem('image',response.additionalUserInfo.profile.picture)
  localStorage.setItem('token', response.credential.accessToken)
  localStorage.setItem('profilName',   response.additionalUserInfo.profile.displayName)

}
export default firebase.auth();
