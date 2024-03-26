import { useState } from 'react'
import Navbar from "../components/navigation/MainNavbar";

const Application = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles(Array.from(event.target.files));
  };

  return (
    <main>
      <Navbar />
      <section className="flex items-center justify-center h-[87.5vh] overflow-auto">
        <div className="flex items-center justify-center w-3/4 h-5/6 bg-blue-100 shadow-2xl rounded overflow-auto">
          <form className="flex flex-col w-1/2 h-full">
            <div className="flex flex-col gap-2 p-3 pt-4">
                <input
                type="text"
                className="input input-bordered shadow-lg"
                placeholder="name"
                />
                <input
                type="email"
                className="input input-bordered shadow-lg"
                placeholder="email"
                />
                <input
                type="tel"
                className="input input-bordered shadow-lg"
                placeholder="phone"
                />
                <input
                type="text"
                className="input input-bordered shadow-lg"
                placeholder="course"
                />
                <input
                type="text"
                className="input input-bordered shadow-lg"
                placeholder="university/college"
                />
                <input
                type="file"
                multiple
                onChange={handleFileChange}
                />
            </div>
            <div className='px-3 pb-4'>
                <button className="btn w-1/4 bg-blue-800 text-slate-200 hover:bg-blue-950 ">Apply</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Application;