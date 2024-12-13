import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup,signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const provider = new GoogleAuthProvider();

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, provider);
    }
    const RegisterWithEmailPassword = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logInWithEmailAndPassword = (email, password) =>{
        return signInWithEmailAndPassword(auth,email, password);
    }
    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }
   useEffect(()=>{
    const unSubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        setLoading(false);
    })
    return ()=>{
        unSubscribe();
    }
   },[])

    const authInfo = {
        googleSignIn,
        user,
        setUser,
        loading,
        RegisterWithEmailPassword,
        logInWithEmailAndPassword,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;