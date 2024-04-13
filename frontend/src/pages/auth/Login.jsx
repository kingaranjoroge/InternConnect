import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
  
    // Check if 'user' or 'org' already exists in localStorage
    if (localStorage.getItem('user') || localStorage.getItem('org')) {
      alert('Already logged in. Please log out first.');
      return;
    }
  
    const email = event.target[0].value;
    const password = event.target[1].value;
  
    const response = await axios.post('http://localhost:3000/users/validate', { email, password });
    if (response.data) {
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate("/attachments");
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <form className="flex flex-col gap-4 w-1/3" onSubmit={handleLogin}>
        <div className="flex items-center justify-center">
          <h1 className="text-blue-800 font-bold text-lg">Login</h1>
        </div>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
          <p className="place-self-center">Don't have an account? <a className="text-blue-800" href="/sign-up">Register</a></p>
          <p className="place-self-center"><a className="text-blue-800" href="/org-signin">Click here to login as an organization</a></p>
        </div>
        <div className="flex items-center justify-center">
          <button type="submit" className="btn bg-blue-800 w-1/2 text-slate-200 hover:bg-blue-950">
            Login
          </button>
        </div>
      </form>
    </main>
  );
};

export default Login;
