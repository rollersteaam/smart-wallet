import { router, Stack } from 'expo-router';

import AppTabs from '@/components/app-tabs';
import IconButton from '@/components/controls/icon-button';

export default function TabsLayout() {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: '',
          headerTransparent: true,
          headerRight: () => <IconButton
              onPress={() => router.push('/settings')}
              name={{
                ios: "gearshape",
                android: "settings",
                web: "settings"
              }} />,
        }}
      />
      <AppTabs />
    </>
  );
}
