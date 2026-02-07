import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config';

const AllAttachments = () => {
  const [attachments, setAttachments] = useState([]);

  useEffect(() => {
    const fetchAttachments = async () => {
      try {
        const response = await axios.get(`${config.serverUrl}/attachments`);
        setAttachments(response.data);
      } catch (error) {
        console.error('Error fetching attachments:', error);
      }
    };

    fetchAttachments();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Attachments</h2>
      <div className="overflow-x-auto rounded-lg border border-surface-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-primary-800 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Id</th>
              <th className="px-4 py-3 font-semibold">Organization</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Location</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Renumeration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-200 bg-white">
            {attachments.map((attachment) => (
              <tr key={attachment._id} className="hover:bg-surface-50 transition-colors">
                <td className="px-4 py-3 text-slate-800 font-medium">{attachment.title}</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">{attachment._id}</td>
                <td className="px-4 py-3 text-slate-800">{attachment.organization}</td>
                <td className="px-4 py-3 text-slate-800">{attachment.email}</td>
                <td className="px-4 py-3 text-slate-800">{attachment.phone}</td>
                <td className="px-4 py-3 text-slate-800">{attachment.location}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded-md bg-primary-100 text-primary-800 text-xs font-medium">{attachment.category}</span>
                </td>
                <td className="px-4 py-3 text-slate-800">{attachment.renumeration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllAttachments;
