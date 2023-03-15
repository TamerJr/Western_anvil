import React, { useEffect, useState } from 'react'
import { onSnapshot ,doc ,updateDoc  } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import { createContext } from 'react'


const  dbContext=createContext({children})
export const DBContext = () => {
    const [list,setList]=useState({})
    const dbCollection=doc(db,"userSubs",`${user?.email}`)
    //getter 
    useEffect(()=>{
   
        onSnapshot(dbCollection,(doc)=>{
            console.log(doc?.data())
        })
    },[user?.email])

    //updater
    const updateData=updateDoc(dbCollection,)
  return (
    <dbContext.Provider value={{unsub,}}>
        {children}
    </dbContext.Provider >
  )
}

export default dbContext