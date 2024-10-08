import AllAttachments from "./AllAttachments"
import CreateAttachment from "./CreateAttachment"
import UpdateAttachment from "./UpdateAttachment"
import FetchAttachment from "./FetchAttachment"
import DeleteAttachment from "./DeleteAttachment"

const Attachments = () => {
  return (
    <main className="flex flex-col lg:flex-row gap-4 px-4 py-4" style={{ minHeight: '90vh' }}>
      <section className="bg-slate-200 w-full lg:w-1/2 rounded overflow-auto max-h-[75vh] lg:max-h-max">
        <AllAttachments />
      </section>
      <section className="flex flex-col gap-6 bg-slate-200 w-full lg:w-1/2 rounded p-4">
        <CreateAttachment />
        <UpdateAttachment />
        <FetchAttachment />
        <DeleteAttachment />
      </section>
    </main>    
  )
}

export default Attachments