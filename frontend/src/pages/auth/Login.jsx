import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here

    // Redirect to the "admin" page
    navigate("/admin");
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
          />
          <input
            type="password"
            placeholder="password"
            className="input input-bordered"
          />
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
