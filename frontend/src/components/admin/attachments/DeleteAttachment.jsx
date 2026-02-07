import { useState } from 'react'
import axios from 'axios'
import config from '../../../../config';

const DeleteAttachment = () => {
  const [attachmentId, setAttachmentId] = useState('');

  const handleAttachmentIdChange = (e) => {
    setAttachmentId(e.target.value);
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`${config.serverUrl}/attachments/${attachmentId}`);
      alert("Attachment has been deleted successfully.");
      setAttachmentId('');
    } catch (err) {
      console.log(err.message);
      alert("Attachment not deleted successfully");
    }
  };

  return (
    <div className="card p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Delete Attachment</h2>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleDelete}>
        <input
          type="text"
          placeholder="attachment id"
          className="input-field flex-1"
          value={attachmentId}
          onChange={handleAttachmentIdChange}
        />
        <button type="submit" className="btn-primary shrink-0 bg-red-600 hover:bg-red-700 focus:ring-red-500/30">
          Delete Attachment
        </button>
      </form>
    </div>
  );
};

export default DeleteAttachment;
