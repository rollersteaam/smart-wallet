import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AnimatedIcon } from '@/components/animated-icon';
import GoogleSignIn from '@/components/auth/google-sign-in';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useIsLoggedIn } from '@/hooks/use-auth';
import { router } from 'expo-router';
import { useEffect } from 'react';

export default function LoginScreen() {
  const isLoggedIn = useIsLoggedIn()

  useEffect(() => {
    if (isLoggedIn) {
      router.dismissAll()
      router.replace("/home")
    }
  }, [isLoggedIn])

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Smart Wallet
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Your trusty work benefits system
          </ThemedText>
        </ThemedView>

        <GoogleSignIn />
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center'
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 20,
  }
});
