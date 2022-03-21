import useCountStore from '@/stores/useCountStore';
import { Link } from 'react-router-dom';

function WalletLoginPage() {
  const count = useCountStore((state) => state.count);
  return (
    <div className="flex justify-center">
      <h1 className="font-bold text-2xl text-blue-900">
        React and Tailwind with Vitejs!
      </h1>
      <p>Count: {count}</p>
      <p>
        <Link to={`/`}>Back</Link>
      </p>
    </div>
  );
}

export default WalletLoginPage;
