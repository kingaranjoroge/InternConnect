import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-surface-50 via-white to-primary-50/30 px-4 py-12">
      <div className="w-full max-w-md text-center mb-8">
        <h1 className="text-2xl font-bold text-primary-900">Create an account</h1>
        <p className="text-slate-600 text-sm mt-1">Choose how you want to join InternConnect</p>
      </div>
      <div className="w-full max-w-md flex flex-col gap-4">
        <Link
          to="/user-registration"
          className="card p-6 flex items-center justify-center gap-3 group hover:shadow-card-hover hover:border-primary-200 transition-all duration-200 border-2 border-transparent"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div className="text-left">
            <span className="font-semibold text-primary-900 group-hover:text-primary-800">Register as Attachee / Intern</span>
            <p className="text-sm text-slate-600">Find and apply to internships</p>
          </div>
        </Link>
        <Link
          to="/org-registration"
          className="card p-6 flex items-center justify-center gap-3 group hover:shadow-card-hover hover:border-primary-200 transition-all duration-200 border-2 border-transparent"
        >
          <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
          </div>
          <div className="text-left">
            <span className="font-semibold text-primary-900 group-hover:text-primary-800">Register as Organization</span>
            <p className="text-sm text-slate-600">Post and manage attachments</p>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Register;
