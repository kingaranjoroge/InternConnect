import React, { useState } from 'react';

const Navbar = ({ onSectionChange }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = (section) => {
    onSectionChange(section);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-screen flex flex-row items-center justify-between bg-blue-800 p-2 h-[12.5vh]">
      <h1 className="font-bold text-2xl text-slate-200 pl-4">Admin</h1>
      <div className="flex flex-row gap-4 pr-8">
        <button className="sm:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <div className="hidden sm:flex flex-row gap-6 text-slate-100">
          <a className="hover:font-bold hover:text-white cursor-pointer" href="/">Home</a>
          <a className="hover:font-bold hover:text-white cursor-pointer" onClick={() => handleClick("Users")}>Users</a>
          <a className="hover:font-bold hover:text-white cursor-pointer" onClick={() => handleClick("Organizations")}>Organizations</a>
          <a className="hover:font-bold hover:text-white cursor-pointer" onClick={() => handleClick("Attachments")}>Attachments</a>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeMenu}>
          <div className="fixed top-0 left-0 w-3/4 h-full bg-blue-900 p-4 text-slate-100  z-20 flex flex-col gap-10" onClick={(e) => e.stopPropagation()}>
            <button className="mb-4" onClick={closeMenu}>
              <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <a className="hover:font-bold hover:text-white cursor-pointer" href="/">Home</a>
            <a className="hover:font-bold hover:text-white cursor-pointer" onClick={() => handleClick("Users")}>Users</a>
            <a className="hover:font-bold hover:text-white cursor-pointer" onClick={() => handleClick("Organizations")}>Organizations</a>
            <a className="hover:font-bold hover:text-white cursor-pointer" onClick={() => handleClick("Attachments")}>Attachments</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;