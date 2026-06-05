import { User } from "firebase/auth";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useAuth = create(
    combine(
        {
            user: null as User | null,
            loading: true
        },
        (set) => ({
            setUser: (newUser: User | null) => set({ user: newUser }),
            setLoading: (newLoading: boolean) => set({ loading: newLoading }),
        })
    )
)

export function useIsLoggedIn() {
    const user = useAuth(s => s.user)
    return user != null
}
