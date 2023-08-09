import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,    
    sendEmailVerification,
    sendPasswordResetEmail,
    deleteUser,
    signOut
} from 'firebase/auth'
import { auth, GoolgleProvider, TwitterProvider } from '../../libs/Firebase'
import { useRouter } from 'next/navigation'

export function useAuth() {

    // Hooks handling the routing
    const router = useRouter()

    // Function handling creating a user with an email and a password
    const signUpWithEmailAndPassword = async (email: string, password: string) => {
        await createUserWithEmailAndPassword(auth, email, password).then((userCred) => {
            const user = userCred.user

        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        })

        // Send email to user for confirmation
        if (auth.currentUser) {
            await sendEmailVerification(auth.currentUser)
        }
    }

    // Function handling signing a user with an email and a password
    const LogInWithEmailAndPassword = async (email: string, password: string) => {
        await signInWithEmailAndPassword(auth, email, password).then((result) => {

        }).catch((error) => {
            const errorCode = error.code
            const errorMessage = error.message
        })
    }

    // Function handling signing a user with Google
    const signInWithGoogle = async () => {
        await signInWithPopup(auth, GoolgleProvider).then((result) => {
            
        })
    }

    // Function handling signing a user with Twitter
    const signInWithTwitter = async () => {
        await signInWithPopup(auth, TwitterProvider).then((result) => {
            
        })
    }

    // Function handling sending an email to reset password
    const resetPassword = async (email: string) => {
        await sendPasswordResetEmail(auth, email).then((result) => {

        }).catch((error) => {

        })
    }

    // Function handling loggin out the user
    const Logout = async () => {
        await signOut(auth).then((result) => {
            
        }).catch((erorr) => {
            
        }).finally(() => {
            // redirect back the index page
            router.push('/')
        })
    }

    const removeUser = async () => {
        if (auth.currentUser)
            await deleteUser(auth.currentUser).then((result) => {
        
            }).catch((error) => {

            }).finally(() => {
                // redirect back the index page
                router.push('/')
            })
    }

  return {
    signUpWithEmailAndPassword,
    LogInWithEmailAndPassword,
    signInWithGoogle,
    signInWithTwitter,
    resetPassword,
    Logout,
    removeUser
  }
}
