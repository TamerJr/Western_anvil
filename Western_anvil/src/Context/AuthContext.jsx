import React, { useState ,useEffect } from 'react'
import { createContext } from 'react'
import { createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword , signOut } from 'firebase/auth'
import { db } from '../../firebaseConfig'
import  {auth} from "../../firebaseConfig"
import {  doc, setDoc } from 'firebase/firestore'
const userContext=createContext()
export const UserContextProvider = ({children}) => {
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState()
    const [user,setUser]=useState()

    //sign up function
    const signUp=async(e)=>{
        e.preventDefault()
        try{

            await createUserWithEmailAndPassword(auth,email,password)
            
            await setDoc(doc(db,"userSubs",email),{
                showsList:[]
            })

        }catch(err){
            console.log(err.message)
        }
    }

    //log in function

    const signIn=async(e)=>{
        e.preventDefault()
        try{

            signInWithEmailAndPassword(auth,email,password)
        }catch(err){
            console.log(err.message)
        }

        
    }

    //user Login status
    // useEffect(()=>{
    //     const userChng=onAuthStateChanged(auth,currentUser=>{
    //         setUser(currentUser)
    //         console.log("logged in")
    //     })
    //     return ()=> userChng()
    // })


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