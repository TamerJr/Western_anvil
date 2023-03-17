import React, { useState, useEffect } from "react";
import { createContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { db } from "../../firebaseConfig";
import { auth } from "../../firebaseConfig";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router";
import { async } from "q";
const userContext = createContext();
export const UserContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState();
  const [user, setUser] = useState({});

  //sign up function
  const signUp = (e) => {
    e.preventDefault();
    try {
      const sub = createUserWithEmailAndPassword(auth, email, password);

      setDoc(doc(db, "userSubs", email), {
        showsList: [],
      });
      return sub;
    } catch (err) {
      console.log(err.message);
    }
  };

  //log in function
  const signIn = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  //user Login status
  useEffect(() => {
    const userChng = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  });

  //log Out
  const logOut = () => {
    navigate("/login");
    signOut(auth);
  };
  return (
    <userContext.Provider
      value={{ signIn, signUp, logOut, setEmail, setPassword, user }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userContext;
