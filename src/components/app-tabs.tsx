import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';
import { useIsLoggedIn } from '@/hooks/use-auth';
import { router, Stack } from 'expo-router';
import IconButton from './controls/icon-button';

export default function AppTabs() {
  const scheme = useColorScheme();
  const colors = Colors[scheme === 'unspecified' ? 'light' : scheme];
  const isLoggedIn = useIsLoggedIn()

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
    
      <NativeTabs
        backgroundColor={colors.background}
        indicatorColor={colors.backgroundElement}
        labelStyle={{ selected: { color: colors.text } }}
        hidden={!isLoggedIn}>
          <NativeTabs.Trigger name="home" hidden={!isLoggedIn}>
            <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              src={{ uri: 'home' }}
              renderingMode="template"
            />
          </NativeTabs.Trigger>

          <NativeTabs.Trigger name="explore" hidden={!isLoggedIn}>
            <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              src={{ uri: 'explore' }}
              renderingMode="template"
            />
          </NativeTabs.Trigger>
      </NativeTabs>
    </>
  );
}
