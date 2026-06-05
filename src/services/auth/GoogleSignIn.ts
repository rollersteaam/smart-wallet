import {
    GoogleAuthProvider,
    signInWithCredential
} from "firebase/auth";
import GoogleAuth, { GoogleAuthScopes } from "react-native-google-auth";
import { auth } from "../../../firebaseConfig";

/**
 * Initializes the ability to Google Sign In authenticate in the app.
 * 
 * Must be called before `signIn`.
 */
export async function initializeAuth() {
    try {
        await GoogleAuth.configure({
            androidClientId: "774806722557-ro3beim6mjug07eg2po06mh7nqv610u0.apps.googleusercontent.com",
            iosClientId: "774806722557-jbhjd3qvlkj5npq3brrp08luhmoh4njt.apps.googleusercontent.com",
            scopes: [GoogleAuthScopes.EMAIL, GoogleAuthScopes.PROFILE]
        });
        console.log('Google Auth configured successfully');
    } catch (error) {
        console.error('Google Auth configuration failed:', error);
        throw error
    }
}

/**
 * Attempt to sign into the user's account using Google authentication on
 * their phone.
 */
export async function signIn() {
    try {
        const response = await GoogleAuth.signIn();

        if (response.type === 'success') {
            const { idToken } = response.data;
            const credential = GoogleAuthProvider.credential(idToken);
            const result = await signInWithCredential(auth, credential);
            const user = result.user
            console.log('User signed in:', user);
            return user
        } else if (response.type === 'cancelled') {
            console.log('Sign in cancelled by user');
            return null
        }

        return null
    } catch (error) {
        console.error('Sign in failed:', error);
        throw error
    }
}
