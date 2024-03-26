import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from  '@fortawesome/react-fontawesome'
import { faEnvelopeCircleCheck } from  '@fortawesome/free-solid-svg-icons'
import AttachmentsNavbar from '../components/navigation/AttachmentsNavbar';

const Attachments = () => {
  const navigate = useNavigate()
  const [attachments, setAttachments] = useState([]);

  const handleNavigate = () => {
    navigate('/application')
  }

  useEffect(() => {
    fetchAttachments();
  }, []);

  const fetchAttachments = async () => {
    try {
      const response = await axios.get('http://localhost:3000/attachments');
      setAttachments(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching attachments:', error);
    }
  };

  return (
    <main>
      <AttachmentsNavbar />
      <section className='flex flex-col p-4 gap-2'>
      {attachments.map((attachment) => (
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
            <button className="btn border-blue-800 text-blue-800 hover:bg-blue-800 hover:text-slate-200">Details</button>
            <button className="btn bg-blue-800 text-slate-200 hover:bg-blue-950 " onClick={handleNavigate}>Apply</button>
          </div>        
        </div>
      ))}
      </section>
    </main>
  );
};

export default Attachments;
