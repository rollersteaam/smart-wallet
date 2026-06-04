import { User } from "react-native-google-auth";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useAuth = create(
    combine(
        {
            user: null as User | null
        },
        (set) => ({
            setUser: (newUser: User | null) => set({ user: newUser })
        })
    )
)

export function useIsLoggedIn() {
    const user = useAuth(s => s.user)
    return user != null
}
