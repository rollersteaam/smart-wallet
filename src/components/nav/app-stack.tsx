import { useIsLoggedIn } from "@/hooks/use-auth";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";
import { AnimatedSplashOverlay } from "../animated-icon";

export default function AppStack() {
    const colorScheme = useColorScheme();
    const isLoggedIn = useIsLoggedIn()

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <AnimatedSplashOverlay />
            <Stack screenOptions={{
                headerShown: false,
                title: "Smart Wallet"
            }}>
                <Stack.Protected guard={isLoggedIn}>
                    <Stack.Screen name="(tabs)" />
                    <Stack.Screen name="settings" />
                </Stack.Protected>
                <Stack.Screen name="index" />
            </Stack>
        </ThemeProvider>
    )
}