// src/context/AuthContext.js
import React, { createContext, useContext, useEffect, useState } from "react";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { auth } from "../../Firebase";

const AuthContext = createContext();


export const useAuth = () => useContext(AuthContext);

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("user");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

 
  const login = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  
  const logout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
