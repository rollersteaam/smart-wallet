import { Button, Host, Text } from '@expo/ui';
import { router, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import IconButton from '@/components/controls/icon-button';
import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';
import { useAuth } from '@/hooks/use-auth';

export default function SettingsScreen() {
  const setUser = useAuth((s) => s.setUser)

  const signOut = () => {
    setUser(null)
    if (router.canGoBack()) {
      router.dismissAll()
    }
    router.replace('/')
  }

  return (
    <>
      <Stack.Screen options={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: "Settings",
        headerTitleStyle: {
          fontSize: 32
        },
        headerLeft: () => <IconButton
            onPress={() => router.back()} 
            name={{ ios: 'chevron.left', android: 'arrow_back', web: 'arrow_back' }}
            style={{
              paddingRight: Spacing.one
            }}
          />,
      }} />
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          <Host matchContents>
            <Button
              onPress={signOut}
              >
                <Text textStyle={{
                  fontSize: 24
                }}>
                  Sign Out
                </Text>
              </Button>
          </Host>
        </SafeAreaView>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    padding: Spacing.four,
    paddingTop: Spacing.six
  },
});
