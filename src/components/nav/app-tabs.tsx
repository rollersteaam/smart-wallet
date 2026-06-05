import { NativeTabs } from 'expo-router/unstable-native-tabs';
import { useColorScheme } from 'react-native';

import { Colors } from '@/constants/theme';
import { useIsLoggedIn } from '@/hooks/use-auth';
import { Stack } from 'expo-router';

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
          headerRight: () => {
            return ( 
            <></>)
          },
        }}
      />
    
      <NativeTabs
        backgroundColor={colors.background}
        indicatorColor={colors.backgroundElement}
        labelStyle={{ selected: { color: colors.text } }}
        hidden={!isLoggedIn}>
          <NativeTabs.Trigger name="home" hidden={!isLoggedIn}>
            <NativeTabs.Trigger.Label>
              Home
            </NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf="house"  
              md="home"
              renderingMode="template"
            />
          </NativeTabs.Trigger>

          <NativeTabs.Trigger name="explore" hidden={!isLoggedIn}>
            <NativeTabs.Trigger.Label>Explore</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf="globe"
              md="globe"
              renderingMode="template"
            />
          </NativeTabs.Trigger>

          <NativeTabs.Trigger name="settings" hidden={!isLoggedIn}>
            <NativeTabs.Trigger.Label>Settings</NativeTabs.Trigger.Label>
            <NativeTabs.Trigger.Icon
              sf="gearshape"
              md="settings"
              renderingMode="template"
            />
          </NativeTabs.Trigger>
      </NativeTabs>
    </>
  );
}
