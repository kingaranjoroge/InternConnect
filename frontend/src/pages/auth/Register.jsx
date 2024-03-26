import { Link } from "react-router-dom"

const Register = () => {
  return (
    <main className="flex flex-row w-screen h-screen">
        <section className="flex items-center justify-center w-1/2 bg-slate-200">
            <div className="bg-blue-800 font-semibold p-3 rounded-xl text-slate-200 hover:bg-blue-600"><Link to="/user-registration">Register as an Attachee / Intern</Link></div>
        </section>
        <section className="flex items-center justify-center w-1/2 bg-blue-800">
            <div className="bg-slate-200 font-semibold p-3 rounded-xl text-black hover:bg-slate-400"><Link to="/org-registration">Register as an Organization</Link></div>
        </section>
    </main>
  )
}

export default Register