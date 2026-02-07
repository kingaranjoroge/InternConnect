import React, { useState } from 'react';

const AttachmentsNavbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full flex flex-row items-center justify-between bg-primary-800 px-4 md:px-8 h-16 shadow-soft sticky top-0 z-50">
      <div className="flex flex-row items-center gap-4">
        <button className="md:hidden p-2 -ml-2 text-slate-100 hover:text-white rounded-lg hover:bg-white/10 transition-colors" onClick={toggleMenu} aria-label="Menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
        <a href="/" className="font-bold text-xl md:text-2xl text-white tracking-tight">InternConnect</a>
      </div>
      <div className="flex flex-row items-center gap-3">
        <div className="hidden sm:block">
          <a href="/" className="font-medium text-slate-100 hover:text-white transition-colors text-sm">Home</a>
        </div>
        <input
          type="text"
          placeholder="Search attachments..."
          value={searchQuery}
          onChange={handleSearch}
          className="input-field py-2 px-3 text-sm w-36 sm:w-48 md:w-56 bg-white/10 border-white/20 text-white placeholder:text-slate-300 focus:bg-white focus:text-slate-800 focus:placeholder:text-slate-400"
        />
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 md:hidden" onClick={closeMenu}>
          <div className="fixed top-0 right-0 w-72 max-w-[85vw] h-full bg-primary-800 shadow-2xl p-6 flex flex-col gap-6 pt-16" onClick={(e) => e.stopPropagation()}>
            <button className="absolute top-4 right-4 p-2 text-slate-100 hover:text-white rounded-lg" onClick={closeMenu} aria-label="Close">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <a href="/" className="font-medium text-slate-100 hover:text-white" onClick={closeMenu}>Home</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AttachmentsNavbar;
