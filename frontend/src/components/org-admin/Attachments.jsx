import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../config';

const Attachments = () => {
  const [attachments, setAttachments] = useState([]);
  const [organization, setOrganization] = useState('');

  const fetchAttachments = async () => {
    try {
      const response = await axios.get(`${config.serverUrl}/attachments/organization/${organization}`);
      setAttachments(response.data);
    } catch (error) {
      console.error('Error fetching attachments:', error);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Attachments</h2>
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          className="input-field flex-1"
          value={organization}
          onChange={(e) => setOrganization(e.target.value)}
          placeholder="Organization name (e.g. organization2)"
        />
        <button className="btn-primary shrink-0" onClick={fetchAttachments}>
          Fetch Attachments
        </button>
      </div>
      <div className="overflow-x-auto rounded-lg border border-surface-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-primary-800 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Title</th>
              <th className="px-4 py-3 font-semibold">Id</th>
              <th className="px-4 py-3 font-semibold">Category</th>
              <th className="px-4 py-3 font-semibold">Renumeration</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-200 bg-white">
            {attachments.map((attachment) => (
              <tr key={attachment._id} className="hover:bg-surface-50 transition-colors">
                <td className="px-4 py-3 text-slate-800 font-medium">{attachment.title}</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">{attachment._id}</td>
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

export default Attachments;
