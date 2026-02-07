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
    <main className="min-h-screen bg-gradient-to-br from-surface-50 via-white to-primary-50/30">
      <MainNavbar />
      <section className="flex flex-col items-center justify-center px-4 py-12 md:py-20 min-h-[calc(100vh-4rem)]">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-900 leading-tight">
            Unlock endless internship & attachment possibilities
          </h1>
          <p className="text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Empower your future with our comprehensive platform, connecting students to a vast array of internship and attachment opportunities—find the perfect match to kickstart your career.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              className="btn-primary w-full sm:w-auto min-w-[180px]"
              onClick={handleRegisterNavigate}
            >
              Get started
            </button>
            <button
              className="btn-secondary w-full sm:w-auto min-w-[180px]"
              onClick={handleAttachmentsNavigate}
            >
              Browse attachments
            </button>
          </div>
          <p className="text-slate-500 text-xs sm:text-sm pt-2">
            To view admin features, sign in with the provided credentials.
          </p>
        </div>
      </section>
    </main>
  )
}

export default Home;
