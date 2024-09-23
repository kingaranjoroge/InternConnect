import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from "../components/navigation/MainNavbar";
import axios from 'axios';
import config from '../../config';

const Application = () => {
  const location = useLocation();
  const selectedAttachment = location.state?.selectedAttachment || null;
  // const [selectedFiles, setSelectedFiles] = useState([]);
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

  // const handleFileChange = (event) => {
  //   setSelectedFiles(Array.from(event.target.files));
  // };

  const handleInputChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Send form data to the backend
    try {
      await axios.post(`${config.serverUrl}/applications`, formData);
      console.log('Form data sent to the server:', formData);

      //clear form data after submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        university: "",
        message: "",
        attachmentEmail: "",
        attachmentTitle: ""
      })
    } catch (error) {
      console.error('Error sending form data to the server:', error);
    }

    // Send email
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
      console.log('Email sent successfully');
      alert('Email sent successfully')
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Email not sent, please try again')
    }
  };

  return (
    <main>
      <Navbar />
      <section className="flex items-center justify-center h-[87.5vh] overflow-auto">
        <div className="flex items-center justify-center w-11/12 sm:w-3/4 h-5/6 bg-blue-100 shadow-2xl rounded overflow-auto">
          <form className="flex flex-col w-11/12 sm:w-3/4 lg:w-1/2 h-full" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 p-3 pt-4">
              <input
                type="text"
                className="input input-bordered shadow-lg"
                placeholder="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                className="input input-bordered shadow-lg"
                placeholder="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                className="input input-bordered shadow-lg"
                placeholder="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="input input-bordered shadow-lg"
                placeholder="course"
                name="course"
                value={formData.course}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="input input-bordered shadow-lg"
                placeholder="university/college"
                name="university"
                value={formData.university}
                onChange={handleInputChange}
              />
              <textarea
                className="input input-bordered shadow-lg"
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
              {/* <input
                type="file"
                multiple
                onChange={handleFileChange}
              /> */}
            </div>
            <div className='px-3 pb-4'>
              <button type="submit" className="btn w-1/4 bg-blue-800 text-slate-200 hover:bg-blue-950">Apply</button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Application;