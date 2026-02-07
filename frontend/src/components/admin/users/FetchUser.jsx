import { useState } from 'react'
import axios from 'axios'
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import config from '../../../../config';

Modal.setAppElement('#root');  // This line is needed for accessibility reasons

const FetchUser = () => {
  const [userId, setUserId] = useState('')
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const handleUserIdChange = (e) => {
    setUserId(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.get(`${config.serverUrl}/users/${userId}`)
      alert("User fetched successfully");
      console.log(res.data);

      // set modal content and open modal
      setModalContent(res.data);
      setModalIsOpen(true);

      // clear form data
      setUserId('')
    }catch(err){
      alert("User not fetched successfully")
      console.error('Error fetching user:', err);
    }
  }

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="card p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Fetch User</h2>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
        <input type="text" placeholder="user id" className="input-field flex-1" value={userId} onChange={handleUserIdChange} />
        <button type="submit" className="btn-primary shrink-0">Fetch User</button>
      </form>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="card max-w-2xl w-[95vw] max-h-[80vh] mx-auto mt-6 p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-primary-900">User details</h3>
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
  )
}

export default FetchUser