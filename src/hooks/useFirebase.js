import { useEffect, useState } from "react"
import initializeAuthentication from './../Firebase/firebase.innitialize'
import { getAuth, signInWithPopup, GoogleAuthProvider , onAuthStateChanged , signOut  } from "firebase/auth";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    
    const signinUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
        
    }
    
    const logout = () => {
        signOut(auth)
        .then(() => {
            setUser({});
        })
        .finally(() => setIsLoading(false))
    }
    // To Check if the user is signed In or not
    useEffect( () => {
        const unsubscribe = onAuthStateChanged(auth, user => {

        if(user){
            setUser(user)
        }
        else{
            setUser({})
        }
        setIsLoading(false)
       }) 
       return unsubscribe;
    }, [auth])
    return {
        user,
        error,
        signinUsingGoogle,
        logout,
        isLoading
    }
}
export default useFirebase;