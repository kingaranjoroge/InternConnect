import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const OrgRegistration = () => {
    const navigate = useNavigate();

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
          const res = await axios.post('http://localhost:3000/organizations', formData);
          console.log(res.data);
          alert("Organization created successfully!");
    
          // clear form data after successful submission
          setFormData({ name: "", email: "", phone: "", location: "" });

          navigate('/sign-in');
        } catch (err) {
          console.log(err.message);
          alert("Organization not created successfully!");
        }
      };

  return (
    <main className="flex items-center justify-center w-screen h-screen">
        <form className="flex flex-col gap-2 w-1/3" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center pb-3">
                <h1 className="text-blue-800 font-bold text-lg">Register</h1>
            </div>
            <div className="flex flex-col gap-4">
                <input 
                    type="text" 
                    placeholder="org name"
                    className="input input-bordered"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                <input 
                    type="email" 
                    placeholder="org email"
                    className="input input-bordered"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                <input 
                    type="tel" 
                    placeholder="org phone"
                    className="input input-bordered"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
                <input 
                    type="text" 
                    placeholder="org location"
                    className="input input-bordered"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                />
            </div>
            <div className="flex items-center justify-center pb-3">
                <button type='submit' className="btn bg-blue-800 w-3/4 text-slate-200 hover:bg-blue-950">Register</button>
            </div>
        </form>
    </main>
  )
}

export default OrgRegistration