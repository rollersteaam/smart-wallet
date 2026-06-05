import { getAuth } from 'firebase/auth';

import AppStack from '@/components/nav/app-stack';
import { useAuth } from '@/hooks/use-auth';
import { DarkTheme, DefaultTheme, ThemeProvider } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, useColorScheme, View } from 'react-native';
import '../../firebaseConfig';

export default function RootLayout() {
  const setUser = useAuth(s => s.setUser)
  const setLoading = useAuth(s => s.setLoading)
  const loading = useAuth(s => s.loading)
  const colorScheme = useColorScheme();

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      setUser(user)
      setLoading(false)
    })

    return () => {
      unsubscribe()
    }
  }, [])
  
  return <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
    { loading ?
      <View style={{
        alignItems: 'center',
        height: '100%',
        justifyContent: 'center',
        backgroundColor: DarkTheme.colors.background
      }}>
        <ActivityIndicator size={50}/>
      </View>
      :
      <AppStack /> }
    </ThemeProvider>
}
