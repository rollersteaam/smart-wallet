import { StyleSheet } from 'react-native';

import { initializeAuth, signIn } from "@/services/auth/GoogleSignIn";
import { Button, Host, Text } from '@expo/ui';
import { useEffect } from 'react';


export default function GoogleSignIn() {
    useEffect(() => {
        initializeAuth()
    }, [])

    return (
        <Host matchContents>
            <Button onPress={signIn}
            style={{
                padding: 24
            }}>
                <Text textStyle={{
                    fontSize: 24
                }}>
                    Sign in with Google
                </Text>
            </Button> 
        </Host>
    )
}


const styles = StyleSheet.create({
  
});
