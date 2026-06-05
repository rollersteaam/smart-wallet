import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';
import { useAuth } from '@/hooks/use-auth';
import useRemoteAsset from '@/hooks/use-remote-asset';
import { Image } from 'expo-image';

export default function HomeScreen() {
  const user = useAuth((s) => s.user)

  if (!user) {
    return <></>
  }

  const { localUri: userPhoto } = useRemoteAsset(user.photoURL ?? '')

  return (
    <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <ThemedView style={styles.heroSection}>
            <Image
              source={userPhoto}
              style={{
                width: 100,
                height: 100,
                borderRadius: 9999,
                overflow: 'hidden'
              }}
              />

            <ThemedText type="title" style={styles.title}>
              Welcome, {user.displayName?.split(" ")[0]}.
            </ThemedText>
          </ThemedView>
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
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
});
