import { useNavigate } from "react-router-dom";
import axios from 'axios';
import config from "../../../config";

const OrgLogin = () => {
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    if (localStorage.getItem('user') || localStorage.getItem('org')) {
      alert('Already logged in. Please log out first.');
      return;
    }

    const email = event.target[0].value;
    const password = event.target[1].value;

    const response = await axios.post(`${config.serverUrl}/organizations/validate`, { email, password });
    if (response.data) {
      localStorage.setItem('org', JSON.stringify(response.data));
      navigate("/org-admin");
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-50 via-white to-primary-50/30 px-4 py-12">
      <div className="card w-full max-w-md p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-primary-900">Organization sign in</h1>
          <p className="text-slate-600 text-sm mt-1">Sign in to manage your attachments</p>
        </div>
        <form className="flex flex-col gap-5" onSubmit={handleLogin}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email</label>
            <input
              type="email"
              placeholder="org@example.com"
              className="input-field"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-field"
              required
            />
          </div>
          <button type="submit" className="btn-primary w-full py-3 mt-2">
            Sign in
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-slate-600">
          Don't have an account?{' '}
          <a className="font-semibold text-primary-700 hover:text-primary-800 underline underline-offset-2" href="/sign-up">Register</a>
        </p>
      </div>
    </main>
  );
};

export default OrgLogin;
