import { subHours } from "date-fns";
import { create } from "zustand";
import { combine } from "zustand/middleware";


export type Transaction = {
    id: number
    date: Date
    description: string
    amount: number
    runningBalance: number
}

export const useWalletStore = create(
    combine(
        {
            balance: 500,
            history: [
                {
                    id: 2,
                    date: subHours(new Date(), 4),
                    amount: 150,
                    description: "Sold items",
                    runningBalance: 500
                },
                {
                    id: 1,
                    date: subHours(new Date(), 7),
                    amount: -150,
                    description: "Bought some items",
                    runningBalance: 350
                }
            ] as Transaction[]
        },
        (set) => ({
            setBalance: (newBalance: number) => set({ balance: newBalance }),
            setHistory: (newHistory: Transaction[]) => set({ history: newHistory })
        })
    )
)
