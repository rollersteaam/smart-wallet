import { getAuth } from 'firebase/auth';

import AppStack from '@/components/nav/app-stack';
import { useAuth } from '@/hooks/use-auth';


export default function RootLayout() {
  const setUser = useAuth(s => s.setUser)

  getAuth().onAuthStateChanged((user) => {
    setUser(user)
  })

  return <AppStack />
}
