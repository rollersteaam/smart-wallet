import { router, Stack } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedView } from '@/components/themed-view';
import { Spacing } from '@/constants/theme';

export default function SettingsScreen() {
  return (
    <>
      <Stack.Screen options={{
        headerShown: true,
        headerTransparent: true,
        headerTitle: "Settings",
        headerTitleStyle: {
          fontSize: 32
        },
        headerLeft: () => (
          <Pressable onPress={() => router.back()} hitSlop={8}>
            <SymbolView
              name={{ ios: 'chevron.left', android: 'arrow_back', web: 'arrow_back' }}
              size={32}
              tintColor="#ffffff"
              />
          </Pressable>
        ),
      }} />
      <ThemedView style={styles.container}>
        <SafeAreaView style={styles.safeArea}>
          {/* <ThemedText type="title">Settings</ThemedText> */}
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
    padding: Spacing.four
  },
});
