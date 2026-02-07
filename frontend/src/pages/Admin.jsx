import { useState } from "react";
import Navbar from "../components/admin/Navbar";
import Body from "../components/admin/Body";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("Users");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-surface-50 via-white to-primary-50/30">
      <Navbar onSectionChange={handleSectionChange} />
      <Body activeSection={activeSection} />
    </main>
  );
};

export default Admin;
