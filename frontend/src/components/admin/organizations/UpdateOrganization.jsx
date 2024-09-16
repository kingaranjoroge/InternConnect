import { useState } from 'react'
import axios from 'axios'
import config from '../../../../config';

const UpdateOrganization = () => {
  const [organizationId, setOrganizationId] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      await axios.patch(`${config.serverUrl}/organizations/${organizationId}`, formData);
      alert("Organization updated successfully!");

      // clear organization id and form data after successful update
      setOrganizationId('');
      setFormData({ name:'', email:'', phone:'', location:'', password:'' });
    } catch(err){
      alert("Organization not updated successfully!");
      console.log(err.message);
    }
  }

  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-blue-800 font-semibold">Update Organization</h1>
      <form className="flex flex-col gap-2"  onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <input 
            type="text" 
            placeholder="organization id"
            className="input input-bordered"
            value={organizationId}
            onChange={handleOrganizationIdChange}
          />
          <input 
            type="text" 
            placeholder="name"
            className="input input-bordered"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <input 
            type="email" 
            placeholder="email"
            className="input input-bordered"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <input 
            type="tel" 
            placeholder="phone"
            className="input input-bordered"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="location"
            className="input input-bordered"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
          <input 
            type="text" 
            placeholder="password"
            className="input input-bordered"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type='submit' className="btn bg-blue-800 w-1/2 text-slate-200 hover:bg-blue-950">Update Organization</button>
      </form>
   </main>
  )
}

export default UpdateOrganization