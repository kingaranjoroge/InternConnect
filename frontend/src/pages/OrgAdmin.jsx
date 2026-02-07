import Attachments from "../components/org-admin/Attachments"
import CreateAttachment from "../components/admin/attachments/CreateAttachment"
import UpdateAttachment from "../components/admin/attachments/UpdateAttachment"
import FetchAttachment from "../components/admin/attachments/FetchAttachment"
import DeleteAttachment from "../components/admin/attachments/DeleteAttachment"
import OrgAdminNavbar from "../components/navigation/OrgAdminNavbar"

const OrgAdmin = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-surface-50 via-white to-primary-50/30">
      <OrgAdminNavbar />
      <section className="flex flex-col lg:flex-row gap-6 p-4 md:p-8 max-w-7xl mx-auto" style={{ minHeight: '90vh' }}>
        <section className="card w-full lg:w-1/2 overflow-auto max-h-[75vh] lg:max-h-none">
          <Attachments />
        </section>
        <section className="flex flex-col gap-6 w-full lg:w-1/2">
          <CreateAttachment />
          <UpdateAttachment />
          <FetchAttachment />
          <DeleteAttachment />
        </section>
      </section>
    </main>
  )
}

export default OrgAdmin
