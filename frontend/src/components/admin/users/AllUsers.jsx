import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../../../config';

const AllUsers = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${config.serverUrl}/users`);
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Users</h2>
      <div className="overflow-x-auto rounded-lg border border-surface-200">
        <table className="w-full text-sm text-left">
          <thead className="bg-primary-800 text-white">
            <tr>
              <th className="px-4 py-3 font-semibold">Name</th>
              <th className="px-4 py-3 font-semibold">Id</th>
              <th className="px-4 py-3 font-semibold">Email</th>
              <th className="px-4 py-3 font-semibold">Phone</th>
              <th className="px-4 py-3 font-semibold">Role</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-surface-200 bg-white">
            {users.map((user) => (
              <tr key={user._id} className="hover:bg-surface-50 transition-colors">
                <td className="px-4 py-3 text-slate-800">{user.name}</td>
                <td className="px-4 py-3 text-slate-600 font-mono text-xs">{user._id}</td>
                <td className="px-4 py-3 text-slate-800">{user.email}</td>
                <td className="px-4 py-3 text-slate-800">{user.phone}</td>
                <td className="px-4 py-3">
                  <span className="px-2 py-0.5 rounded-md bg-primary-100 text-primary-800 text-xs font-medium">{user.role}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
