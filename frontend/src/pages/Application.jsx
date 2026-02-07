import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Navbar from "../components/navigation/MainNavbar";
import axios from 'axios';
import config from '../../config';

const Application = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const selectedAttachment = location.state?.selectedAttachment || null;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    university: '',
    message: '',
    attachmentEmail: selectedAttachment ? selectedAttachment.email : '',
    attachmentTitle: selectedAttachment ? selectedAttachment.title : '',
  });

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post(`${config.serverUrl}/applications`, formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        university: "",
        message: "",
        attachmentEmail: "",
        attachmentTitle: ""
      });
    } catch (error) {
      console.error('Error sending form data to the server:', error);
    }

    try {
      await axios.post(`${config.serverUrl}/send-email`, {
        from: formData.email,
        to: formData.attachmentEmail,
        subject: formData.attachmentTitle,
        text: `
          Name: ${formData.name},
          Email: ${formData.email},
          Phone: ${formData.phone},
          Course: ${formData.course},
          University: ${formData.university},
          Message: ${formData.message}`
      });
      alert('Application sent successfully');
      navigate('/');
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Email not sent, please try again');
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-surface-50 via-white to-primary-50/30">
      <Navbar />
      <section className="flex items-center justify-center px-4 py-12 min-h-[calc(100vh-4rem)]">
        <div className="card w-full max-w-lg p-6 md:p-8">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-primary-900">Apply for attachment</h1>
            {selectedAttachment && (
              <p className="text-slate-600 text-sm mt-1">Applying to: {selectedAttachment.title}</p>
            )}
          </div>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input
                type="text"
                className="input-field"
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                className="input-field"
                placeholder="your@email.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Phone</label>
              <input
                type="tel"
                className="input-field"
                placeholder="Phone number"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Course</label>
              <input
                type="text"
                className="input-field"
                placeholder="Course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">University / College</label>
              <input
                type="text"
                className="input-field"
                placeholder="University or college"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea
                className="input-field min-h-[100px] resize-y"
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="btn-primary w-full py-3 mt-2">
              Submit application
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Application;
