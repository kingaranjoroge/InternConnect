import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import AttachmentsNavbar from '../components/navigation/AttachmentsNavbar';
import Modal from 'react-modal';
import config from '../../config';

Modal.setAppElement('#root');  // This line is needed for accessibility reasons

const Attachments = () => {
  const navigate = useNavigate();
  const [attachments, setAttachments] = useState([]);
  const [filteredAttachments, setFilteredAttachments] = useState([]);
  const [selectedAttachment, setSelectedAttachment] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    fetchAttachments();
  }, []);

  const fetchAttachments = async () => {
    try {
      const response = await axios.get(`${config.serverUrl}/attachments`);
      setAttachments(response.data);
      setFilteredAttachments(response.data);
    } catch (error) {
      console.error('Error fetching attachments:', error);
    }
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filtered = attachments.filter((attachment) =>
      Object.values(attachment).some((value) =>
        value.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    setFilteredAttachments(filtered);
  };

  const handleNavigate = (attachment) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const org = JSON.parse(localStorage.getItem('org'));
    setSelectedAttachment(attachment);
    if (user) {
      navigate('/application', { state: { selectedAttachment: attachment } });
    } else if (org){
      alert("You can't apply as an organization")
    } else {
      navigate('/sign-in');
    }
  };

  const handleDetails = (attachment) => {
    setSelectedAttachment(attachment);
    setModalContent(attachment.description);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <main>
      <AttachmentsNavbar onSearch={handleSearch} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="flex flex-col p-4 bg-slate-200 rounded shadow-lg overflow-auto max-w-4xl max-h-96 w-11/12 h-5/6 mx-auto mt-10"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <button onClick={closeModal} className="self-end mb-2">
          <FontAwesomeIcon icon={faTimes} />
        </button>
        {selectedAttachment && (
          <h2 className="text-xl font-bold mb-4 text-blue-900 text-center">{selectedAttachment.title}</h2>
      )}
        <div className="overflow-auto">
          <p>{modalContent}</p>
        </div>
      </Modal>
      <section className='flex flex-col p-4 gap-2'>
        {filteredAttachments.length === 0 ? (
          <div className='flex flex-col items-center justify-center h-[75vh]'>
            <p className='text-xl font-bold'>No attachments found</p>
            <p>Try searching with different keywords</p>
            <br />
            <p className="text-base font-semibold text-gray-400">(might take a moment to fetch items from server...)</p>
          </div>
        ) : (
          filteredAttachments.map((attachment) => (
            <div className='flex flex-row w-5/6 border-b-2 border-slate-300 p-4' key={attachment._id}>
              <div>
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} size='3x' className='text-blue-800' />
              </div>
              <div className='flex flex-col gap-1 w-full pl-5'>
                <div className='flex flex-row gap-1'>
                  <h1 className='text-blue-800 font-bold text-lg'>{attachment.title} <span className='text-black font-normal text-base'> | </span> </h1>
                  <p>{attachment.organization} | </p>
                  <p>{attachment.email} | </p>
                  <p>{attachment.phone} | </p>
                  <p>{attachment.location} | </p>
                  <p>{attachment.category} | </p>
                </div>
                <div>
                  <p>renumeration: <span className='text-blue-800'>{attachment.renumeration}</span></p>
                </div>
              </div>
              <div className='flex flex-row gap-3'>
                <button className="btn border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-slate-200" onClick={() => handleDetails(attachment)}>Details</button>
                <button className="btn bg-blue-800 text-slate-200 hover:bg-blue-950" onClick={() => handleNavigate(attachment)}>Apply</button>
              </div>
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default Attachments;