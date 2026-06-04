import { router, useNavigation } from 'expo-router';
import { SymbolView } from 'expo-symbols';
import { useLayoutEffect } from 'react';
import { Pressable } from 'react-native';

import AppTabs from '@/components/app-tabs';

export default function TabsLayout() {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: '',
      headerTransparent: true,
      headerRight: () => (
        <Pressable onPress={() => router.push('/settings')} hitSlop={8}>
          <SymbolView name={{
            ios: "gearshape",
            android: "settings",
            web: "settings"
          }} size={22} tintColor="#ffffff" />
        </Pressable>
      ),
    });
  }, [navigation]);

  return <AppTabs />;
}
