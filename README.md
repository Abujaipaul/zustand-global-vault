## Writing zustand codes against context api..

# Zustand VS

A high-performance frontend trading interface engineered to simulate real-time stock purchases and dynamic wallet deductions. This project demonstrates advanced global state management and UI architecture without relying on prop-drilling.

##  Technical Architecture

This application bypasses traditional React `useState` and Context API limitations by utilizing a centralized global memory vault. 

* **Frontend Framework:** React 18 (Hooks)
* **Global State Management:** Zustand
* **Build Tool:** Vite
* **Styling:** Vanilla CSS / Inline Architecture

##  Core Features

* **Global Wallet State:** A centralized bank vault that manages the user's total balance securely outside the React component tree.
* **Real-Time Transaction History:** Array mutations that instantly generate and push dynamic receipts to the UI whenever a transaction is executed.
* **Zero Prop-Drilling:** Components subscribe directly to the Zustand store, ensuring surgical, high-performance DOM updates.
* **Intl Number Formatting:** Native JavaScript APIs used to format raw integers into localized Nigerian Naira (₦) currency strings.

## Run it Locally

Want to inspect the architecture on your own machine? 

1. Clone the repository:
   ```bash
   git clone [https://github.com/Abujaipaul/zustand-global-vault](https://github.com/Abujaipaul/zustand-global-vault)