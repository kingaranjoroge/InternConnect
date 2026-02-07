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
    <div className="card p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Update Organization</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Organization ID</label>
          <input type="text" placeholder="organization id" className="input-field" value={organizationId} onChange={handleOrganizationIdChange} />
        </div>
        <input type="text" placeholder="name" className="input-field" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" placeholder="email" className="input-field" name="email" value={formData.email} onChange={handleChange} />
        <input type="tel" placeholder="phone" className="input-field" name="phone" value={formData.phone} onChange={handleChange} />
        <input type="text" placeholder="location" className="input-field" name="location" value={formData.location} onChange={handleChange} />
        <input type="password" placeholder="password" className="input-field" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="btn-primary w-fit mt-1">Update Organization</button>
      </form>
    </div>
  )
}

export default UpdateOrganization