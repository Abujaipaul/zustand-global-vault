import { useBankStore } from './useBankStore';
import Navbar from './navbar'; // ⬅️ Import it here
import './App.css'; 

export default function App() {
  const { walletBalance, userName, deductBalance } = useBankStore();

  const formattedBalance = new Intl.NumberFormat("en-NG", {
    style: 'currency',
    currency: "NGN"
  }).format(walletBalance);

  return (
    <div>
      <Navbar /> {/* ⬅️ Drop it right here at the top. No props! */}
      
      <div className="main" style={{ padding: '20px' }}>
        <h2>👋 Welcome back, {userName}</h2>
        
        {/* ... the rest of your card and button code from before ... */}
        <button 
          onClick={() => deductBalance(50000)}
          style={{ padding: '10px 20px', background: 'blue', color: 'white', marginTop: '20px' }}
        >
          Buy GTCO Stock (₦50,000)
        </button>
      </div>
    </div>
  );
}