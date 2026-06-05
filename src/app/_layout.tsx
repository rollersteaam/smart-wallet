import { getAuth } from 'firebase/auth';

import AppStack from '@/components/nav/app-stack';
import { useAuth } from '@/hooks/use-auth';
import { useEffect } from 'react';
import '../../firebaseConfig';

export default function RootLayout() {
  const setUser = useAuth(s => s.setUser)

  useEffect(() => {
    const unsubscribe = getAuth().onAuthStateChanged((user) => {
      setUser(user)
    })
    return () => {
      unsubscribe()
    }
  }, [])

  return <AppStack />
}
