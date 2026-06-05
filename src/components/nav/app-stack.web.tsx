import { AnimatedSplashOverlay } from "@/components/animated-icon";
import { useIsLoggedIn } from "@/hooks/stores/use-auth-store";
import { DarkTheme, DefaultTheme, Stack, ThemeProvider } from "expo-router";
import { useColorScheme } from "react-native";

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
                </Stack.Protected>
                <Stack.Screen name="index" />
            </Stack>
        </ThemeProvider>
    )
}