import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check for 'user' and 'org' in localStorage and remove whichever one exists
    if (localStorage.getItem('user')) {
      localStorage.removeItem('user');
    } else if (localStorage.getItem('org')) {
      localStorage.removeItem('org');
    }

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