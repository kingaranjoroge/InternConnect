import User from "./users/User";
import Organization from "./organizations/Organization";
import Attachment from "./attachments/Attachment";

const Body = ({ activeSection }) => {
  return (
    <main>
      {activeSection === "Users" && <User />}
      {activeSection === "Organizations" && <Organization />}
      {activeSection === "Attachments" && <Attachment />}
    </main>
  );
};

export default Body;
