import { useState } from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config';

Modal.setAppElement('#root');

const FetchAttachment = () => {
  const [attachmentId, setAttachmentId] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleAttachmentIdChange = (e) => {
    setAttachmentId(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`${config.serverUrl}/attachments/${attachmentId}`);
      console.log(res.data);
      alert("Attachment fetched successfully");
      setModalContent(res.data);
      setModalIsOpen(true);
      setAttachmentId('');
    } catch (err) {
      console.error('Error fetching attachment:', err);
      alert("Attachment not fetched successfully");
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Fetch Attachment</h2>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="attachment id"
          className="input-field flex-1"
          value={attachmentId}
          onChange={handleAttachmentIdChange}
        />
        <button type="submit" className="btn-primary shrink-0">Fetch Attachment</button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="card max-w-2xl w-[95vw] max-h-[80vh] mx-auto mt-6 p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-primary-900">Attachment details</h3>
          <button onClick={closeModal} className="p-2 rounded-lg text-slate-500 hover:bg-surface-200" aria-label="Close">
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
        </div>
        {modalContent && (
          <div className="overflow-auto space-y-2 text-sm">
            {Object.entries(modalContent).map(([key, value]) => (
              <p key={key}><strong className="text-primary-800">{key}:</strong> <span className="text-slate-700">{String(value)}</span></p>
            ))}
          </div>
        )}
      </Modal>
    </div>
  );
};

export default FetchAttachment;
