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
    <nav className="w-full flex flex-row items-center justify-between bg-blue-800 p-2 h-[12.5vh]">
      <div className="flex flex-row items-center gap-4">
        <button className="sm:hidden" onClick={toggleMenu}>
          <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
        <h1 className="font-bold text-xl sm:text-2xl text-slate-200">InternConnect</h1>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="hidden sm:flex flex-row gap-8">
          <p className="font-bold text-slate-200 text-base pt-2 hover:text-slate-300"><a href="/">Home</a></p>
        </div>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearch}
          className="px-2 py-1 sm:px-4 sm:py-2 rounded-md text-sm sm:text-base w-24 sm:w-auto"
        />
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={closeMenu}>
          <div className="fixed top-0 left-0 w-3/4 h-full bg-blue-900 p-4 z-20 flex flex-col gap-10" onClick={(e) => e.stopPropagation()}>
            <button className="mb-4" onClick={closeMenu}>
              <svg className="w-6 h-6 text-slate-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <p className="font-bold text-slate-200 text-base pt-2 hover:text-slate-300"><a href="/">Home</a></p>
          </div>
        </div>
      )}
    </nav>
  );
};

export default AttachmentsNavbar;