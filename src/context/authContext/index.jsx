import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth, db } from "../../Firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignOut } from "../../Firebase/auth";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setRole(userDoc.data().role);
        } else {
          setRole("user"); // Default role if not found
        }
      } else {
        setRole(null);
      }
      setCurrentUser(user);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // 🔥 Sign Up (Registers user & sets default role)
  const signUp = async (email, password) => {
    const userCredential = await doCreateUserWithEmailAndPassword(email, password);
    const user = userCredential.user;

    // Save user data in Firestore with default "user" role
    await setDoc(doc(db, "users", user.uid), {
      email,
      role: "user",
    });

    setRole("user");
    return userCredential;
  };

  // 🔥 Sign In
  const signIn = async (email, password) => {
    return doSignInWithEmailAndPassword(email, password);
  };

  // 🔥 Logout
  const logout = async () => {
    await doSignOut();
    setCurrentUser(null);
    setRole(null);
  };

  const value = {
    currentUser,
    role,
    isLoading,
    signUp,
    signIn,
    logout,
  };

  return <AuthContext.Provider value={value}>{!isLoading && children}</AuthContext.Provider>;
}
