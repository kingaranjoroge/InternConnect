import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    } else if (localStorage.getItem('org')) {
      localStorage.removeItem('org');
    }
    navigate('/');
  }, [navigate]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-50 via-white to-primary-50/30">
      <div className="card p-8 text-center">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-100 text-primary-600 mb-4">
          <svg className="w-6 h-6 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
        </div>
        <h1 className="text-lg font-semibold text-primary-900">Signing out...</h1>
        <p className="text-slate-600 text-sm mt-1">Redirecting you home</p>
      </div>
    </main>
  );
};

export default Logout;
