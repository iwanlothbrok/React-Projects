import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from '../firebase'

const UserContext = createContext();

export const AuthContextProvicer = ({ children }) => {

    const [user, setUser] = useState({});

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };
    //[] as the dependency array means it will only run once).
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log(currentUser);
            setUser(currentUser);
        })
        return () => {
            unsubscribe();
        }
    }, []);


    

    return (
        <UserContext.Provider value={{ createUser, user }}>
            {children}
        </UserContext.Provider>
    )
}

// By using the UserAuth hook in any component within the AuthContextProvider,
//  you can access the createUser function and user object with the authenticated user's data.

export const UserAuth = () => {
    return useContext(UserContext)
}