import { useState } from "react";
import Navbar from "../components/admin/Navbar";
import Body from "../components/admin/Body";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("Users");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <main className="w-screen h-screen">
      <Navbar onSectionChange={handleSectionChange} />
      <Body activeSection={activeSection} />
    </main>
  );
};

export default Admin;
