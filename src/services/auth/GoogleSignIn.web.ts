import {
    getAuth,
    GoogleAuthProvider,
    signInWithPopup
} from "firebase/auth";

/**
 * Stub. Used in the Android & iOS implementation.
 * 
 * Implement if you need it for your auth method.
 */
export async function initializeAuth() {

}

/**
 * Attempt to sign into the user's account using Google authentication on
 * their web browser.
 */
export async function signIn() {
    try {
        const auth = getAuth()
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user

        console.log('User signed in:', user);
        return user
    } catch (error) {
        console.error('Sign in failed:', error);
        throw error
    }
}
