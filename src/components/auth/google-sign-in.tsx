import { useEffect, useState } from 'react';
import { Platform, Pressable, StyleSheet } from 'react-native';

import { Image } from "expo-image";

import { initializeAuth, signIn as signInWithGoogle } from "@/services/auth/GoogleSignIn";

const LoginImage = Platform.select({
    android: require("@/assets/images/google/Android/svg/dark/android_dark_rd_SI.svg"),
    ios: require("@/assets/images/google/iOS/svg/dark/ios_dark_rd_SI.svg"),
    default: require("@/assets/images/google/Web (mobile + desktop)/svg/dark/web_dark_rd_SI.svg")
})

export default function GoogleSignIn() {
    useEffect(() => {
        initializeAuth()
    }, [])

    const signIn = async () => {
        await signInWithGoogle()
    }

    const [hovered, setHovered] = useState(false);

    return (
        <Pressable onPress={signIn}
            onHoverIn={() => setHovered(true)}
            onHoverOut={() => setHovered(false)}
            style={{ filter: hovered ? 'brightness(1.2)' : 'brightness(1)' }}>
            {({ pressed }) => (
                <Image
                    source={LoginImage}
                    contentFit="contain"
                    style={{
                        width: 250,
                        height: 100,
                        opacity: pressed ? 0.5 : 1,
                        transform: [
                            {
                                scale: pressed ? 0.95 : 1
                            },
                        ]
                    }}
                />
            )}
        </Pressable>
    )
}


const styles = StyleSheet.create({
  
});
