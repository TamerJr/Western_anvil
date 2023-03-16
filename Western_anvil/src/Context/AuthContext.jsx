import React, { useState ,useEffect } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword , signOut } from 'firebase/auth'
import { db } from '../../firebaseConfig'
import  auth from "../../firebaseConfig"
import {  doc, setDoc } from 'firebase/firestore'
const userContext=createContext()
export const UserContextProvider = ({children}) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState()
    const [user,setUser]=useState({})
    const dbCollection=doc(db,"userSubs",`${user?.email}`)

    //sign up function
    const signUp=async(e)=>{
        e.preventDefault()
        await createUserWithEmailAndPassword(auth,email,password)
        await setDoc(dbCollection,{
            showsList:[]
        })
    }

    //log in function

    const signIn=async(e)=>{
        e.preventDefault()
        await signInWithEmailAndPassword(auth,email,password)

        
    }

    //user Login status
    useEffect(()=>{
        const userChng=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser)
        })
        return ()=> userChng()
    })


    //log Out
    const logOut=async()=>{
        signOut(auth)
         
    }
  return (
    <userContext.Provider value ={{signIn,signUp,logOut ,setEmail ,setPassword ,user}}>
        {children}
    </userContext.Provider>
  )
}

export default userContext