import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear any user data from state or local storage
    localStorage.removeItem('user');

    // Redirect to the login page
    navigate('/sign-in');
  }, [navigate]);

  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <h1 className="text-blue-800 font-bold text-lg">Signing out...</h1>
    </main>
  );
};

export default Logout;