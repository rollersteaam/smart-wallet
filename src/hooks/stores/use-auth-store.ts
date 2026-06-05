import { User } from "firebase/auth";
import { create } from "zustand";
import { combine } from "zustand/middleware";

export const useAuthStore = create(
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
    const user = useAuthStore(s => s.user)
    return user != null
}
