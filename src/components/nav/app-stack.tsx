import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { useIsLoggedIn } from "@/hooks/use-auth";
import { Stack } from "expo-router";

export default function AppStack() {
    
    const isLoggedIn = useIsLoggedIn()

    return (
        <>
            <AnimatedSplashOverlay />
            <Stack screenOptions={{
                headerShown: false,
                title: "Smart Wallet"
            }}>
                <Stack.Protected guard={isLoggedIn}>
                    <Stack.Screen name="(tabs)" />
                </Stack.Protected>
                <Stack.Screen name="index" />
            </Stack>
        </>
    )
}