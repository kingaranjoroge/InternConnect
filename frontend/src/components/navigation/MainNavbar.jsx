const MainNavbar = () => {
  return (
    <nav className="flex flex-row items-center justify-between bg-blue-800 p-2 h-[12.5vh]">
        <h1 className="font-bold text-2xl text-slate-200 pl-4">InternConnect</h1>
        <div className="flex flex-row gap-4 pr-8">
            <p className="font-bold text-slate-200 text-base hover:text-slate-300"><a href="/attachments">Attachments</a></p>
            <p className="font-bold text-slate-200 text-base hover:text-slate-300"><a href="/sign-in">Sign-in</a></p>
        </div>
    </nav>
  )
}

export default MainNavbar