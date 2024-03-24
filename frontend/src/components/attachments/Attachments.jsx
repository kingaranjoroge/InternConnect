import { useState, useEffect } from 'react';
import axios from 'axios';

const Attachments = () => {
  const [attachments, setAttachments] = useState([]);

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
    <div>
      {attachments.map((attachment) => (
        <div key={attachment._id}>
          <h2>{attachment.title}</h2>
          <p>{attachment.organization}</p>
          <p>{attachment.email}</p>
          <p>{attachment.phone}</p>
          <p>{attachment.location}</p>
          <p>{attachment.category}</p>
          <p>{attachment.description}</p>
          <p>{attachment.renumeration}</p>
        </div>
      ))}
    </div>
  );
};

export default Attachments;
