import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config';

const AllOrganizations = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get(`${config.serverUrl}/organizations`);
        setOrganizations(response.data);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };

    fetchOrganizations();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Organizations</h2>
      <div className="overflow-x-auto rounded-lg border border-surface-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-primary-800 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Id</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Location</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-200 bg-white">
            {organizations.map((org) => (
              <tr key={org._id} className="hover:bg-surface-50 transition-colors">
                <td className="px-4 py-3 text-slate-800 font-medium">{org.name}</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">{org._id}</td>
                <td className="px-4 py-3 text-slate-800">{org.email}</td>
                <td className="px-4 py-3 text-slate-800">{org.phone}</td>
                <td className="px-4 py-3 text-slate-800">{org.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllOrganizations;
