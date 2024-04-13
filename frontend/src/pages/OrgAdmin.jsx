import Attachments from "../components/org-admin/Attachments"
import CreateAttachment from "../components/admin/attachments/CreateAttachment"
import UpdateAttachment from "../components/admin/attachments/UpdateAttachment"
import FetchAttachment from "../components/admin/attachments/FetchAttachment"
import DeleteAttachment from "../components/admin/attachments/DeleteAttachment"
import OrgAdminNavbar from "../components/navigation/OrgAdminNavbar"

const OrgAdmin = () => {
  return (
    <main className="flex flex-col">
        <OrgAdminNavbar />
        <section className="flex flex-row gap-4 px-4 py-4" style={{ minHeight: '90vh' }}>
            <section className="bg-slate-200 w-1/2 rounded overflow-auto">
                <Attachments />
            </section>
            <section className="flex flex-col gap-6 bg-slate-200 w-1/2 rounded p-4">
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