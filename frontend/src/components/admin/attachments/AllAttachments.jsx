import { useState, useEffect } from 'react';
import axios from 'axios';

const AllAttachments = () => {
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const response = await axios.get('http://localhost:3000/attachments'); 
        setAttachments(response.data);
      } catch (error) {
        console.error('Error fetching attachments:', error);
      }
    };

    fetchAttachments();
  }, []);

  return (
    <main className="flex flex-col gap-2 p-4 pt-1">
      <div className="flex justify-center">
        <h1 className="text-blue-800 font-semibold">Attachments</h1>
      </div>
      <table>
        <thead className="bg-blue-800 text-slate-200">
          <tr>
            <th className="pr-4">Title</th>
            <th className="pr-4">Id</th>
            <th className="pr-4">Organization</th>
            <th className="pr-4">Email</th>
            <th className="pr-4">Phone</th>
            <th className="pr-4">Location</th>
            <th className="pr-4">Category</th>
            <th className="pr-4">Description</th>
            <th className='pr-4'>Renumeration</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          {attachments.map(attachment => (
            <tr key={attachment._id}>
              <td className="pr-4 pb-2">{attachment.title}</td>
              <td className="pr-4 pb-2">{attachment._id}</td>
              <td className="pr-4 pb-2">{attachment.organization}</td>
              <td className="pr-4 pb-2">{attachment.email}</td>
              <td className="pr-4 pb-2">{attachment.phone}</td>
              <td className="pr-4 pb-2">{attachment.location}</td>
              <td className="pr-4 pb-2">{attachment.category}</td>
              <td className="pr-4 pb-2">{attachment.description}</td>
              <td className="pr-4 pb-2">{attachment.renumeration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default AllAttachments;
