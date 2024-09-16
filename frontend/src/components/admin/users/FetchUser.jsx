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
    <main className="flex flex-col gap-2">
      <h1 className="text-blue-800 font-semibold">Fetch User</h1>
        <form className="flex flex-row gap-4" onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              placeholder="user id"
              className="input input-bordered"
              value={userId}
              onChange={handleUserIdChange}
            />
          </div>
          <button type='submit' className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Fetch User</button>
        </form>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="flex flex-col p-4 bg-slate-200 rounded shadow-lg overflow-auto max-w-4xl max-h-96 w-11/12 h-5/6 mx-auto mt-10"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <button onClick={closeModal} className="self-end mb-2">
            <FontAwesomeIcon icon={faTimes} />
          </button>
          {modalContent && (
            <div className="overflow-auto">
              {Object.entries(modalContent).map(([key, value]) => (
                <p key={key}><strong className="text-blue-900">{key}:</strong> {value}</p>
              ))}
            </div>
          )}
        </Modal>
    </main>
  )
}

export default FetchUser