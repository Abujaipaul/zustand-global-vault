import { useBankStore } from './useBankStore';
import './App.css'; 

export default function App() {
  // 1. THE EXTRACTION: We call our hook and grab exactly what we need
  const { walletBalance, userName, deductBalance } = useBankStore();

  // 2. Format the money so it looks like a real bank
  const formattedBalance = new Intl.NumberFormat("en-NG", {
    style: 'currency',
    currency: "NGN"
  }).format(walletBalance);

  // 3. The UI Assembly
  return (
    <div className="main">
      <h2>👋 Welcome back, {userName}</h2>
      
      <div className="balance-card" style={{ 
        background: '#111', 
        color: '#00FF00', 
        padding: '20px', 
        borderRadius: '10px',
        marginTop: '20px',
      }}>
        <p style={{ margin: 0, fontSize: '14px', color: '#888' }}>Total Balance</p>
        <h1 style={{ margin: '10px 0' }}>{formattedBalance}</h1>
      </div>

      <button 
        onClick={function() { deductBalance(50000) }}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          background: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Buy GTCO Stock (₦50,000)
      </button>
    </div>
  );
}