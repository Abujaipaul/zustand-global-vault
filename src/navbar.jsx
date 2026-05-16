import { useBankStore } from './useBankStore';

export default function Navbar() {
  // We only grab the balance. We don't need the userName or deduct function here.
  const { walletBalance } = useBankStore();

  const formattedBalance = new Intl.NumberFormat("en-NG", {
    style: 'currency',
    currency: "NGN"
  }).format(walletBalance);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#000',
      color: '#fff',
      borderBottom: '2px solid #333'
    }}>
      <h3 style={{ margin: 0, color: 'greenyellow' }}>Bank Logo</h3>
      <p style={{ margin: 0, fontWeight: 'bold' }}>
        Vault: {formattedBalance}
      </p>
    </nav>
  );
}
