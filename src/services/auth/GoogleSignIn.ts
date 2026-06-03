import GoogleAuth, { GoogleAuthScopes } from "react-native-google-auth";

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
            console.log('User signed in:', response.data.user);
            // Handle successful sign-in
        } else if (response.type === 'cancelled') {
            console.log('Sign in cancelled by user');
        }
    } catch (error) {
        console.error('Sign in failed:', error);
        throw error
    }
}
