import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import config from "../../../config";

const OrgRegistration = () => {
  const navigate = useNavigate();

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
      const res = await axios.post(`${config.serverUrl}/organizations`, formData);
      console.log(res.data);
      alert("Organization created successfully!");

      setFormData({ name: "", email: "", phone: "", location: "", password: "" });

      navigate('/org-admin');
    } catch (err) {
      console.log(err.message);
      alert("Organization not created successfully!");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-50 via-white to-primary-50/30 px-4 py-12">
      <div className="card w-full max-w-md p-6 md:p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-primary-900">Register your organization</h1>
          <p className="text-slate-600 text-sm mt-1">Create an account to post attachments</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Organization name</label>
            <input
              type="text"
              placeholder="org name"
              className="input-field"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="org@example.com"
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
              placeholder="org phone"
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
              placeholder="org location"
              className="input-field"
              name="location"
              value={formData.location}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="input-field"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn-primary w-full py-3 mt-2">
            Register
          </button>
        </form>
      </div>
    </main>
  )
}

export default OrgRegistration
