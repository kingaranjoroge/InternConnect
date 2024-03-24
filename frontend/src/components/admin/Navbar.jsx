const Navbar = ({ onSectionChange }) => {
  const handleClick = (section) => {
    onSectionChange(section);
  };

  return (
    <main className="flex flex-row justify-between items-center px-12 bg-blue-800 h-12">
      <div>
        <i className="font-bold text-xl text-slate-100">Admin</i>
      </div>
      <div className="flex flex-row justify-evenly gap-6 text-slate-100">
        <a
          className="hover:font-bold hover:text-white cursor-pointer"
          onClick={() => handleClick("Users")}
        >
          Users
        </a>
        <a
          className="hover:font-bold hover:text-white cursor-pointer"
          onClick={() => handleClick("Organizations")}
        >
          Organizations
        </a>
        <a
          className="hover:font-bold hover:text-white cursor-pointer"
          onClick={() => handleClick("Attachments")}
        >
          Attachments
        </a>
      </div>
    </main>
  );
};

export default Navbar;
