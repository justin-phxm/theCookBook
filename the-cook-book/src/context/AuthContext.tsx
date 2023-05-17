import React, { useContext, useState, useEffect } from 'react'
import { auth} from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'

const AuthContext = React.createContext(useAuth)

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children } : {children: React.ReactNode}) {
    const [currentUser, setCurrentUser] = useState(null)
    const [loading, setLoading] = useState(true)

    function signup(email : string, password : string) {
        createUserWithEmailAndPassword(auth, email, password)
        return
    }

    function login(email : string , password : string) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout() {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return unsubscribe
    }, [])

    const value = {
        currentUser,
        login,
        signup,
        logout,
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}