import { useState } from 'react'
import axios from 'axios'

const FetchAttachment = () => {
  const [attachmentId, setAttachmentId] = useState('')

  const handleAttachmentIdChange = (e) => {
    setAttachmentId(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.get(`http://localhost:3000/attachments/${attachmentId}`)
      console.log(res.data);
      alert("Attachment fetched successfully");

      // clear form data
      setAttachmentId('')
    }catch(err){
      console.error('Error fetching attachment:', err);
      alert("Attachment not fetched successfully")
    }
  }

    return (
      <main className="flex flex-col gap-2">
        <h1 className="text-blue-800 font-semibold">Fetch Attachment</h1>
          <form className="flex flex-row gap-4" onSubmit={handleSubmit}>
            <div>
              <input 
                type="text" 
                placeholder="attachment id"
                className="input input-bordered"
                value={attachmentId}
                onChange={handleAttachmentIdChange}
              />
            </div>
            <button type='submit' className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Fetch Attachment</button>
          </form>
      </main>
    )
  }
  
  export default FetchAttachment