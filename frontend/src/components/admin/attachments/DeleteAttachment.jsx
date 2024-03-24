import { useState } from 'react'
import axios from 'axios'

const DeleteAttachment = () => {
  const [attachmentId, setAttachmentId] = useState('')

  const handleAttachmentIdChange = (e) => {
    setAttachmentId(e.target.value)
  }

  const handleDelete = async (e) => {
    e.preventDefault()
    try {
      await axios.delete(`http://localhost:3000/attachments/${attachmentId}`)
      alert("Attachment has been deleted successfully.")

      // clear attachment id
      setAttachmentId('')
    } catch (err) {
      console.log(err.message)
      alert("Attachment not deleted successfully")
    }
  }

    return (
      <main className="flex flex-col gap-2">
        <h1 className="text-blue-800 font-semibold">Delete Attachment</h1>
          <form className="flex flex-row gap-4" onSubmit={handleDelete}>
            <div>
              <input 
                type="text" 
                placeholder="attachment id"
                className="input input-bordered"
                value={attachmentId}
                onChange={handleAttachmentIdChange}
              />
            </div>
            <button type='submit' className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Delete Attachment</button>
          </form>
      </main>
    )
  }
  
  export default DeleteAttachment