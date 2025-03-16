import { 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signOut 
} from "firebase/auth";
import { auth, db } from "./index.js"; 
import { doc, setDoc, getDoc } from "firebase/firestore"; 

// 🔥 Sign Up with Email & Password (Saves role in Firestore)
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCredential.user;

  // Store user info in Firestore with default role: "user"
  await setDoc(doc(db, "users", user.uid), {
    email,
    role: "user",  // Default role
  });

  return userCredential;
};

// 🔥 Sign In with Email & Password
export const doSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

// 🔥 Sign In with Google (Ensures role is set in Firestore)
export const doSignInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;

  // Check if user already exists in Firestore
  const userDoc = await getDoc(doc(db, "users", user.uid));
  
  // If user does not exist, set default role as "user"
  if (!userDoc.exists()) {
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      role: "user",  // Default role
    });
  }

  return result;
};

// 🔥 Sign Out
export const doSignOut = async () => {
  return signOut(auth);
};

