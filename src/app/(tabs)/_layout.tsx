import { router, Stack } from 'expo-router';
import { SymbolView } from 'expo-symbols';

import AppTabs from '@/components/app-tabs';
import { Pressable } from 'react-native';

function SettingsButton() {
  return (
    <Pressable onPress={() => router.push('/settings')}
      android_ripple={{
        borderless: true,
        radius: 24,
      }}
      hitSlop={12}
      style={({ pressed }) => ({
        backgroundColor: 'transparent',
        opacity: pressed ? 0.7 : 1
      })}>
        <SymbolView
          name={{
            ios: "gearshape",
            android: "settings",
            web: "settings"
          }}
          size={32}
          tintColor="#ffffff"
          animationSpec={{ effect: { type: 'bounce', direction: 'up' } }}
          />
    </Pressable>
  );
}

export default function TabsLayout() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: '',
          headerTransparent: true,
          headerRight: () => <SettingsButton />,
        }}
      />
      <AppTabs />
    </>
  );
}
