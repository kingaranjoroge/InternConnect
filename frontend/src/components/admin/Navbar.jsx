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

  const navLinkClass = "font-medium text-slate-100 hover:text-white transition-colors duration-200 cursor-pointer";

  return (
    <nav className="w-full flex flex-row items-center justify-between bg-primary-800 px-4 md:px-8 h-16 shadow-soft sticky top-0 z-50">
      <h1 className="font-bold text-xl md:text-2xl text-white tracking-tight">Admin</h1>
      <div className="flex flex-row gap-6 items-center">
        <button className="md:hidden p-2 -mr-2 text-slate-100 hover:text-white rounded-lg hover:bg-white/10 transition-colors" onClick={toggleMenu} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <div className="hidden md:flex flex-row items-center gap-6">
          <a href="/" className={navLinkClass}>Home</a>
          <span className={navLinkClass} onClick={() => handleClick("Users")}>Users</span>
          <span className={navLinkClass} onClick={() => handleClick("Organizations")}>Organizations</span>
          <span className={navLinkClass} onClick={() => handleClick("Attachments")}>Attachments</span>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" onClick={closeMenu}>
          <div className="fixed top-0 right-0 w-72 max-w-[85vw] h-full bg-primary-800 shadow-2xl p-6 flex flex-col gap-6 pt-16" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 p-2 text-slate-100 hover:text-white rounded-lg" onClick={closeMenu} aria-label="Close">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="/" className={navLinkClass} onClick={closeMenu}>Home</a>
            <span className={navLinkClass} onClick={() => handleClick("Users")}>Users</span>
            <span className={navLinkClass} onClick={() => handleClick("Organizations")}>Organizations</span>
            <span className={navLinkClass} onClick={() => handleClick("Attachments")}>Attachments</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
