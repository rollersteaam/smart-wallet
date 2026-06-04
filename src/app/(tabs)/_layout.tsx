import { router, Stack } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { useCallback, useState } from 'react';
import { Pressable } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';

import AppTabs from '@/components/app-tabs';

function SettingsButton() {
  const scale = useSharedValue(1);
  const [animKey, setAnimKey] = useState(0);

  const animStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePress = useCallback(() => {
    setAnimKey((k) => k + 1);
    router.push('/settings');
  }, []);

  return (
    <Pressable
      onPressIn={() => { scale.value = withSpring(0.82, { damping: 15, stiffness: 300 }); }}
      onPressOut={() => { scale.value = withSpring(1, { damping: 12, stiffness: 200 }); }}
      onPress={handlePress}
      hitSlop={8}
    >
      <Animated.View style={animStyle}>
        <SymbolView
          key={animKey}
          name={{
            ios: "gearshape",
            android: "settings",
            web: "settings"
          }}
          size={32}
          tintColor="#ffffff"
          animationSpec={{ effect: { type: 'bounce', direction: 'up' } }}
          />
      </Animated.View>
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
