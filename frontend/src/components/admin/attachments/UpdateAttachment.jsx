import { useState } from 'react'
import axios from 'axios'
import config from '../../../../config';

const UpdateAttachment = () => {
  const [attachmentId, setAttachmentId] = useState('');
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

  const handleAttachmentIdChange = (e) => {
    setAttachmentId(e.target.value);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(`${config.serverUrl}/attachments/${attachmentId}`, formData);
      console.log(response.data);
      alert("Attachment updated successfully!");
      setAttachmentId('');
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
      alert("Attachment not updated successfully!");
    }
  };

  return (
    <div className="card p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Update Attachment</h2>
      <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Attachment ID</label>
          <input
            type="text"
            placeholder="attachment id"
            className="input-field"
            value={attachmentId}
            onChange={handleAttachmentIdChange}
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input type="text" placeholder="title" className="input-field" name="title" value={formData.title} onChange={handleChange} />
          <input type="text" placeholder="organization name" className="input-field" name="organization" value={formData.organization} onChange={handleChange} />
          <input type="email" placeholder="organization email" className="input-field" name="email" value={formData.email} onChange={handleChange} />
          <input type="tel" placeholder="organization phone" className="input-field" name="phone" value={formData.phone} onChange={handleChange} />
          <input type="text" placeholder="location" className="input-field" name="location" value={formData.location} onChange={handleChange} />
          <input type="text" placeholder="category" className="input-field" name="category" value={formData.category} onChange={handleChange} />
          <input type="text" placeholder="description" className="input-field sm:col-span-2" name="description" value={formData.description} onChange={handleChange} />
          <input type="number" placeholder="renumeration" className="input-field" name="renumeration" value={formData.renumeration} onChange={handleChange} />
        </div>
        <button type="submit" className="btn-primary w-fit mt-1">Update Attachment</button>
      </form>
    </div>
  );
};

export default UpdateAttachment;
