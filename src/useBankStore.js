
import { create } from 'zustand';

// We pass a basic function into the create engine
export const useBankStore = create(function(set) {
    
    // The engine expects us to RETURN an object containing our memory and actions
    return {
        // 1. THE MEMORY (State)
        walletBalance: 2500000,
        userName: "Abujai Paul",

        // 2. THE ACTIONS (Functions)
        deductBalance: function(amount) {
            
            // We call the Zustand "set" function to update the vault
            set(function(state) {
                // We return the brand new state
                return {
                    walletBalance: state.walletBalance - amount
                };
            });
            
        }
    };
});


/* ====================================================
 🚀 MODERN ES6 ARROW FUNCTION VERSION (For Reference)
====================================================

import { create } from 'zustand';

export const useBankStore = create((set) => ({
    
    // 1. THE MEMORY (State)
    walletBalance: 2500000,
    userName: "Abujai Paul",

    // 2. THE ACTIONS (Functions)
    // Notice how 'function' and 'return' are completely removed
    deductBalance: (amount) => set((state) => ({ 
        walletBalance: state.walletBalance - amount 
    })),
    
}));
*/