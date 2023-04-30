import React, { createContext, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
  updateProfile,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect } from "react";

export const ShareContext = createContext();

const Context = ({ children }) => {
  const auth = getAuth(app);
  // for loading spiner
  const [loading, setLoading] = useState(true);
  // for Opening Modal anywhere
  const [isOpen, setIsOpen] = useState(false);
  // user
  const [user, setUser] = useState(null);

  //   createUSer with Email anď password;
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   add user name
  const updateName = (name) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  // Login with Email and Password
  const loginWithEP = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   Login with Google
  const googleProvider = new GoogleAuthProvider();
  const loginWithG = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   Login With Github
  const githubProvider = new GithubAuthProvider();
  const LoginWithGit = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unsubcrebe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(user);
    });
    return () => unsubcrebe();
  });

  const shareContext = {
    user,
    isOpen,
    loading,
    setIsOpen,
    setLoading,
    createUser,
    updateName,
    loginWithEP,
    loginWithG,
    LoginWithGit,
  };
  return (
    <div>
      <ShareContext.Provider value={shareContext}>
        {children}
      </ShareContext.Provider>
    </div>
  );
};

export default Context;
