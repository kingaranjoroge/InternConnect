import { useState, useEffect } from 'react';
import axios from 'axios';

const AllOrganizations = () => {
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const response = await axios.get('https://internconnect-yg04.onrender.com/organizations'); 
        setOrganizations(response.data);
      } catch (error) {
        console.error('Error fetching organizations:', error);
      }
    };

    fetchOrganizations();
  }, []);

  return (
    <main className="flex flex-col gap-2 p-4 pt-1">
      <div className="flex justify-center">
        <h1 className="text-blue-800 font-semibold">Organizations</h1>
      </div>
      <table>
        <thead className="bg-blue-800 text-slate-200">
          <tr>
            <th className="pr-4">Name</th>
            <th className="pr-4">Id</th>
            <th className="pr-4">Email</th>
            <th className="pr-4">Phone</th>
            <th className="pr-4">location</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-400">
          {organizations.map(organization => (
            <tr key={organization._id}>
              <td className="pr-4 pb-2">{organization.name}</td>
              <td className="pr-4 pb-2">{organization._id}</td>
              <td className="pr-4 pb-2">{organization.email}</td>
              <td className="pr-4 pb-2">{organization.phone}</td>
              <td className="pr-4 pb-2">{organization.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default AllOrganizations;
