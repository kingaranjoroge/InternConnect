import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="flex flex-col gap-4 items-center justify-center w-full h-screen">
      <div
        className="bg-slate-200 hover:bg-blue-800 font-semibold p-3 rounded-3xl text-blue-800 hover:text-slate-200 text-sm outline-double hover:outline-blue-800 w-64 md:w-72 flex items-center justify-center"
        style={{ outlineWidth: '4px'}}
      >
        <Link to="/user-registration">Register as an Attachee / Intern</Link>
      </div>
      <div
        className="bg-slate-200 hover:bg-blue-800 font-semibold p-3 rounded-3xl text-blue-800 hover:text-slate-200 text-sm outline-double hover:outline-blue-800 w-64 md:w-72 flex items-center justify-center"
        style={{ outlineWidth: '4px'}}
      >
        <Link to="/org-registration">Register as an Organization</Link>
      </div>
    </main>
  );
};

export default Register;