import { useState } from 'react';

const AttachmentsNavbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <nav className="flex flex-row items-center justify-between bg-blue-800 p-2 h-[12.5vh]">
      <h1 className="font-bold text-2xl text-slate-200 pl-4">InternConnect</h1>
      <div className="flex flex-row gap-8 pr-8">
        <p className="font-bold text-slate-200 text-base pt-2 hover:text-slate-300"><a href="/">Home</a></p>
        <input
          type="text"
          placeholder="Search attachments..."
          value={searchQuery}
          onChange={handleSearch}
          className="px-4 py-2 rounded-md"
        />
        {/* <p className="font-bold text-slate-200 text-base cursor-pointer hover:text-slate-300">Categories</p> */}
      </div>
    </nav>
  );
};

export default AttachmentsNavbar;