import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  UserCredential,
  User,
} from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
  currentUser: null | User; // Change `any` to the appropriate type of your user object
  login: (email: string, password: string) => Promise<UserCredential>; // Change `any` to the appropriate return type
  signup: (email: string, password: string) => void;
  logout: () => Promise<void>;
}

const MyAuthContext = React.createContext<AuthContextType>(
  {} as AuthContextType
);

export const useAuth = () => {
  return useContext(MyAuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<null | User>(null);
  const [loading, setLoading] = useState(true);

  const signup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
    return;
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authChangeState = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
      } else {
      }
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const logout = () => {
    return signOut(auth);
  };

  const myFunctions: AuthContextType = {
    currentUser,
    signup,
    login,
    logout,
  };

  return (
    <MyAuthContext.Provider value={myFunctions}>
      {!loading && children}
    </MyAuthContext.Provider>
  );
};
