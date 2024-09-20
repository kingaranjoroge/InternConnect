import MainNavbar from "../components/navigation/MainNavbar";
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate()

    const handleRegisterNavigate = () => {
        navigate('/sign-up')
    }
    
    const handleAttachmentsNavigate = () => {
        navigate('/attachments')
    }

  return (
    <main className="w-screen h-screen bg-slate-200">
        <MainNavbar />
        <section className="flex flex-col items-center justify-center gap-4 h-[87.5vh] overflow-auto">
            <div>
                <p className="text-blue-800 font-bold text-sm sm:text-xl md:text-2xl lg:text-4xl">Unlock endless internship & attachment possibilities with <br /> our student-centric attachment platform today!
                </p>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-[10px] sm:text-sm md:text-base font-semibold text-gray-500">Empower your future with our comprehensive software platform, connecting students to</p>
                <p className="text-[10px] sm:text-sm md:text-base font-semibold text-gray-500">a vast array of internship and attachment opportunities, ensuring you</p>
                <p className="text-[10px] sm:text-sm md:text-base font-semibold text-gray-500">find the perfect match to kickstart your career journey.</p>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 pt-1">
                <button className="btn bg-blue-800 text-slate-200 px-4 sm:px-16 hover:bg-blue-950" onClick={handleRegisterNavigate}>Register</button>
                <button className="btn border-blue-800 text-blue-800 bg-slate-200 px-4 sm:px-16 hover:bg-blue-800 hover:text-slate-200 " onClick={handleAttachmentsNavigate}>View attachments</button>
            </div>
            <div className="flex flex-col items-center justify-center">
                <p className="text-[10px] sm:text-sm md:text-base font-semibold text-gray-400">(to view admin functionality, sign in with the provided credentials)</p>
            </div>
        </section>
    </main>
  )
}

export default Home;
