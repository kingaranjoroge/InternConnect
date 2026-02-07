import AllAttachments from "./AllAttachments"
import CreateAttachment from "./CreateAttachment"
import UpdateAttachment from "./UpdateAttachment"
import FetchAttachment from "./FetchAttachment"
import DeleteAttachment from "./DeleteAttachment"

const Attachments = () => {
  return (
    <main className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto" style={{ minHeight: '70vh' }}>
      <section className="card w-full lg:w-1/2 overflow-auto max-h-[75vh] lg:max-h-none">
        <AllAttachments />
      </section>
      <section className="flex flex-col gap-6 w-full lg:w-1/2">
        <CreateAttachment />
        <UpdateAttachment />
        <FetchAttachment />
        <DeleteAttachment />
      </section>
    </main>
  )
}

export default Attachments
