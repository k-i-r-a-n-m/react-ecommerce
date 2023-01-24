import {createContext,useState,useEffect} from 'react'
import { onAuthStateChangedListener,createUserDocumentFromAuth } from '../utils/firebase/firebase.utils'
// default / actual value you want to access
export const UserContext = createContext({
currentUser:null,
setCurrentUser:null
})

 
export const UserProvider =({children})=>{
    const [currentUser,setCurrentUser]= useState()
    const value={currentUser,setCurrentUser}
    // register an AUTH-STATE-CHANGED inside useEffect
    useEffect(()=>{
        const unSuscribe = onAuthStateChangedListener((user)=>{
            console.log(user)
            if(user){
                createUserDocumentFromAuth(user);
                
            }
            setCurrentUser(user)
        })
        return unSuscribe
    },[])

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}