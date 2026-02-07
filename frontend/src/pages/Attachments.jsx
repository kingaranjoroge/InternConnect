import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faTimes } from '@fortawesome/free-solid-svg-icons';
import AttachmentsNavbar from '../components/navigation/AttachmentsNavbar';
import Modal from 'react-modal';
import config from '../../config';

Modal.setAppElement('#root');

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
    } else if (org) {
      alert("You can't apply as an organization");
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
    <main className="min-h-screen bg-gradient-to-br from-surface-50 via-white to-primary-50/30">
      <AttachmentsNavbar onSearch={handleSearch} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        className="card max-w-3xl w-[95vw] max-h-[85vh] mx-auto mt-12 p-6 outline-none"
        overlayClassName="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      >
        <div className="flex items-start justify-between gap-4 mb-4">
          {selectedAttachment && (
            <h2 className="text-xl font-bold text-primary-900 pr-8">{selectedAttachment.title}</h2>
          )}
          <button
            onClick={closeModal}
            className="p-2 rounded-lg text-slate-500 hover:bg-surface-200 hover:text-slate-700 transition-colors shrink-0"
            aria-label="Close"
          >
            <FontAwesomeIcon icon={faTimes} className="w-5 h-5" />
          </button>
        </div>
        <div className="overflow-auto text-slate-600 leading-relaxed max-h-[60vh]">
          <p className="whitespace-pre-wrap">{modalContent}</p>
        </div>
      </Modal>

      <section className="p-4 md:p-8 max-w-6xl mx-auto">
        {filteredAttachments.length === 0 ? (
          <div className="card flex flex-col items-center justify-center py-16 px-6 text-center">
            <div className="w-16 h-16 rounded-2xl bg-surface-200 flex items-center justify-center text-slate-400 mb-4">
              <FontAwesomeIcon icon={faBriefcase} className="w-8 h-8" />
            </div>
            <p className="text-lg font-semibold text-slate-800">No attachments found</p>
            <p className="text-slate-600 text-sm mt-1">Try searching with different keywords</p>
            <p className="text-slate-500 text-xs mt-3">(Items may take a moment to load from the server)</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-1 gap-4">
            {filteredAttachments.map((attachment) => (
              <div
                key={attachment._id}
                className="card p-5 hover:shadow-card-hover transition-shadow duration-200"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-start gap-4 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center shrink-0">
                      <FontAwesomeIcon icon={faBriefcase} className="w-6 h-6" />
                    </div>
                    <div className="flex flex-col gap-1 min-w-0">
                      <h3 className="font-bold text-primary-900 text-lg">{attachment.title}</h3>
                      <p className="text-slate-700 font-medium text-sm">{attachment.organization}</p>
                      <div className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-slate-600">
                        <span>{attachment.email}</span>
                        <span>·</span>
                        <span>{attachment.phone}</span>
                        <span>·</span>
                        <span>{attachment.location}</span>
                        <span>·</span>
                        <span className="text-primary-700 font-medium">{attachment.category}</span>
                      </div>
                      <p className="text-sm text-slate-700 mt-1">
                        Remuneration: <span className="font-semibold text-primary-700">{attachment.renumeration}</span>
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 shrink-0">
                    <button
                      className="btn-secondary py-2 px-4 text-sm"
                      onClick={() => handleDetails(attachment)}
                    >
                      Details
                    </button>
                    <button
                      className="btn-primary py-2 px-4 text-sm"
                      onClick={() => handleNavigate(attachment)}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Attachments;
