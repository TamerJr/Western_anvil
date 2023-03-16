import React, { useContext, useEffect, useState } from 'react'
import { onSnapshot ,doc ,updateDoc  } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import { createContext } from 'react'
import userContext from './AuthContext'


const  dbContext=createContext()
export const DBContextProvider = ({children}) => {
    const {user}=useContext(userContext)
    const [list,setList]=useState()
    const dbCollection=doc(db,"userSubs",`${user?.email}`)
    //getter 
    useEffect(()=>{
   
        onSnapshot(dbCollection,(doc)=>{
            setList(doc?.data().showsList)
        })
    },[user?.email])

    //updater
    const updateData=(ele)=>{
        const newEles= list ? [...list] : []
        newEles.push(ele)
        setList([...newEles])
        try{
            updateDoc(dbCollection,{
                showsList:list
            })
        }catch(err){
            console.log(err.message)
        }
    }
    //remove element
    const deleteEle=(ind)=>{
        let  newList=list?.filter((ele,indx)=>ind !=indx)
        setList([newList])
        try{
            updateDoc(dbCollection,{
                showsList:list
        })
        }catch(err){
            console.log(err.message)
        }
    }
  return (
    <dbContext.Provider value={{list,deleteEle,updateData}}>
        {children}
    </dbContext.Provider >
  )
}

export default dbContext