import { create } from 'zustand';



export const useBankStore = create(function(set) {
    return {
        // 1. THE MEMORY
        walletBalance: 2500000,
        userName: "Abujai Paul",
        transactionHistory: [], // added an empty array to hold the receipts

        // 2. THE ACTIONS
        deductBalance: function(amount) {
            set(function(state) {
                
                // created a brand new receipt object for this exact trade
                const newReceipt = {
                    id: Date.now(), // Unique ID 
                    type: "Stock Purchase",
                    asset: "GTCO",
                    amount: amount,
                    date: new Date().toLocaleTimeString()
                };

                return {
                    // Deduct the money 
                    walletBalance: state.walletBalance - amount,
                    
                 
                    // Created a new array, put the new receipt at the very front (index 0),
                    // and spread (...) all the old receipts right behind it.
                    transactionHistory: [newReceipt, ...state.transactionHistory]
                };
            });
        }
    };
});










/* ===========================================


=======================================================
 🚀 MODERN ES6 ARROW FUNCTION VERSION (For Reference)
=======================================================

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


// export const useBankStore = create((set) => ({

//     //memory (state)
//     userName : "Abujai Paul",
//     walletBalance : 2500000,

//     //actions (functions)
//      deductBalance : (amount) => set((state) => ({
//         walletBalance : state.walletBalance - amount
//      }))
// }))

// export const useBankStore = create(function (set) {

//     return{
//         userName : 'Abujai Paul',
//         walletBalance : 2500000,

//         deductBalance : function (amount) {

//             set(function (state) {
//                 return {
//                     walletBalance : state.walletBalance - amount
//                 }
//             })
//         }
//     }
// })


// // We pass a basic function into the create engine
// export const useBankStore = create(function(set) {
    
//     // The engine expects us to RETURN an object containing our memory and actions
//     return {
//         // 1. THE MEMORY (State)
//         walletBalance: 2500000,
//         userName: "Abujai Paul",

//         // 2. THE ACTIONS (Functions)
//         deductBalance: function(amount) {
            
//             // We call the Zustand "set" function to update the vault
//             set(function(state) {
//                 // We return the brand new state
//                 return {
//                     walletBalance: state.walletBalance - amount
//                 };
//             });        
//         }
//     };
// });
