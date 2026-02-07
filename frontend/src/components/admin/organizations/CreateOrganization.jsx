import { useState } from 'react'
import axios from 'axios'
import config from '../../../../config';

const CreateOrganization = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    password: '',
    role: 'org'
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${config.serverUrl}/organizations`, formData);
      alert("Organization created successfully!");

      // clear form data after successful submission
      setFormData({ name: "", email: "", phone: "", location: "", password: "",});
    } catch (err) {
      alert("Organization not created successfully!");
      console.log(err.message);
    }
  };

  return (
    <div className="card p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Create Organization</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <input type="text" placeholder="name" className="input-field" name="name" value={formData.name} onChange={handleChange} />
        <input type="email" placeholder="email" className="input-field" name="email" value={formData.email} onChange={handleChange} />
        <input type="tel" placeholder="phone" className="input-field" name="phone" value={formData.phone} onChange={handleChange} />
        <input type="text" placeholder="location" className="input-field" name="location" value={formData.location} onChange={handleChange} />
        <input type="password" placeholder="password" className="input-field" name="password" value={formData.password} onChange={handleChange} />
        <button type="submit" className="btn-primary w-fit mt-1">Create Organization</button>
      </form>
    </div>
  )
}

export default CreateOrganization