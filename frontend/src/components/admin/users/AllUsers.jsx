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
    <main className="flex flex-col gap-2 p-4 pt-1">
      <div className="flex justify-center">
        <h1 className="text-blue-800 font-semibold">Users</h1>
      </div>
      <table>
        <thead className="bg-blue-800 text-slate-200">
          <tr>
            <th className="pr-4">Name</th>
            <th className="pr-4">Id</th>
            <th className="pr-4">Email</th>
            <th className="pr-4">Phone</th>
            <th className="pr-4">Role</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          {users.map(user => (
            <tr key={user._id}>
              <td className="pr-4 pb-2">{user.name}</td>
              <td className="pr-4 pb-2">{user._id}</td>
              <td className="pr-4 pb-2">{user.email}</td>
              <td className="pr-4 pb-2">{user.phone}</td>
              <td className="pr-4 pb-2">{user.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default AllUsers;
