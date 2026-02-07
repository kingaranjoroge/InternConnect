import { useState } from 'react'
import axios from 'axios'
import config from '../../../../config';

const CreateAttachment = () => {
  const [formData, setFormData] = useState({
    title: '',
    organization: '',
    email: '',
    phone: '',
    location: '',
    category: '',
    description: '',
    renumeration: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.serverUrl}/attachments`, formData);
      console.log(response.data);
      alert("Attachment created successfully!");
      setFormData({
        title: '',
        organization: '',
        email: '',
        phone: '',
        location: '',
        category: '',
        description: '',
        renumeration: ''
      });
    } catch (err) {
      console.log(err.message);
      alert("Attachment not created successfully!");
    }
  };

  return (
    <div className="card p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Create Attachment</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Title</label>
            <input
              type="text"
              placeholder="title"
              className="input-field"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Organization</label>
            <input
              type="text"
              placeholder="organization name"
              className="input-field"
              name="organization"
              value={formData.organization}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="organization email"
              className="input-field"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
            <input
              type="tel"
              placeholder="organization phone"
              className="input-field"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Location</label>
            <input
              type="text"
              placeholder="location"
              className="input-field"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Category</label>
            <input
              type="text"
              placeholder="category"
              className="input-field"
              name="category"
              value={formData.category}
              onChange={handleChange}
            />
          </div>
          <div className="sm:col-span-2">
            <label className="block text-sm font-medium text-slate-700 mb-1">Description</label>
            <input
              type="text"
              placeholder="description"
              className="input-field"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Renumeration</label>
            <input
              type="number"
              placeholder="renumeration"
              className="input-field"
              name="renumeration"
              value={formData.renumeration}
              onChange={handleChange}
            />
          </div>
        </div>
        <button type="submit" className="btn-primary w-fit mt-1">Create Attachment</button>
      </form>
    </div>
  );
};

export default CreateAttachment;
