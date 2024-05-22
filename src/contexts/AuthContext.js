import React, { createContext, useContext, useState, useEffect } from 'react';
import { authh } from '../firebaseConfig';
import { onAuthStateChanged,signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authh, (user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  const login = async (email, password) => {
    try {
      const {user} = await signInWithEmailAndPassword(authh, email, password);
      console.log(user)
      setCurrentUser(user)
    } catch (error) {
      console.error("Error signing in:", error.message);
      throw error; // Rethrow the error to handle it in the UI
    }
  };

  const logout = async () => {
    try {
      await signOut(authh);
    } catch (error) {
      console.error("Error signing out:", error.message);
      throw error; // Rethrow the error to handle it in the UI
    }
  };


  const value = {
    currentUser,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
