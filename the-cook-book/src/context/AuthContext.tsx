import React, { useContext, useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  UserCredential,
  User,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

interface AuthContextType {
  currentUser: null | User; // Change `any` to the appropriate type of your user object
  login: (email: string, password: string) => Promise<UserCredential>; // Change `any` to the appropriate return type
  signup: (email: string, password: string) => void;
  logout: () => Promise<void>;
  googleLogin: () => void;
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
  const provider = new GoogleAuthProvider();

  const signup = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
    return;
  };

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        // This gives you a Google Access Token. You can use it to access the Google API.

        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        // The signed-in user info.
        // const user = result.user;

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };
  // const authChangeState = () => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       const uid = user.uid;
  //     } else {
  //     }
  //   });
  // };

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
    googleLogin,
  };

  return (
    <MyAuthContext.Provider value={myFunctions}>
      {!loading && children}
    </MyAuthContext.Provider>
  );
};
