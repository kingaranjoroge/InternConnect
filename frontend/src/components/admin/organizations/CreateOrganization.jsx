import { useState } from 'react'
import axios from 'axios'

const CreateOrganization = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3000/organizations', formData);
      alert("Organization created successfully!");

      // clear form data after successful submission
      setFormData({ name: "", email: "", phone: "", location: "" });
    } catch (err) {
      alert("Organization not created successfully!");
      console.log(err.message);
    }
  };

  return (
   <main className="flex flex-col gap-2">
      <h1 className="text-blue-800 font-semibold">Create Organization</h1>
      <form className="flex flex-col gap-2"  onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
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
        </div>
        <button type='submit' className="btn bg-blue-800 w-1/2 text-slate-200 hover:bg-blue-950">Create Organization</button>
      </form>
   </main>
  )
}

export default CreateOrganization