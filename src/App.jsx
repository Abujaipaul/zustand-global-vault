import { useBankStore } from './useBankStore';
import Navbar from './Navbar'; 
import './App.css'; 

export default function App() {
  const { walletBalance, userName, deductBalance, transactionHistory } = useBankStore();

  const formattedBalance = new Intl.NumberFormat("en-NG", {
    style: 'currency',
    currency: "NGN"
  }).format(walletBalance);

  return (
    <div>
      <Navbar /> 
      
      <div className="main" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
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
          onClick={() => deductBalance(50000)}
          style={{
            marginTop: '20px',
            padding: '10px 20px',
            background: 'blue',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontWeight: 'bold',
            width: '100%'
          }}
        >
          Buy GTCO Stock (₦50,000)
        </button>

        {/*  THE NEW TRANSACTION HISTORY SECTION */}
        <div style={{ marginTop: '40px' }}>
          <h3>📜 Transaction History</h3>
          
          {/* Conditional Rendering: If array is empty, show a message. If not, map the array! */}
          {transactionHistory.length === 0 ? (
            <p style={{ color: '#888' }}>No recent transactions. Make a trade!</p>
          ) : (
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {transactionHistory.map((receipt) => (
                <li key={receipt.id} style={{ 
                  background: '#f4f4f4', 
                  padding: '15px', 
                  marginBottom: '10px', 
                  borderRadius: '8px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
                }}>
                  <div>
                    <strong style={{ display: 'block', color: '#333' }}>{receipt.type} ({receipt.asset})</strong>
                    <small style={{ color: '#888' }}>{receipt.date}</small>
                  </div>
                  <strong style={{ color: 'red' }}>
                    -₦{receipt.amount.toLocaleString()}
                  </strong>
                </li>
              ))}
            </ul>
          )}
        </div>

      </div>
    </div>
  );
}