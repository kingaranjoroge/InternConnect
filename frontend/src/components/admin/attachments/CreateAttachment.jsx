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
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(`${config.serverUrl}/attachments`, formData);
            console.log(response.data);
            alert("Attachment created successfully!");

            // clear form data
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
        } catch(err){
            console.log(err.message);
            alert("Attachment not created successfully!");
        };
    }

    return (
      <main className="flex flex-col gap-2">
          <h1 className="text-blue-800 font-semibold">Create Attachment</h1>
          <form className="flex flex-col gap-2"  onSubmit={handleSubmit}>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <div className="flex flex-col gap-2">
                      <input 
                        type="text" 
                        placeholder="title"
                        className="input input-bordered"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                      />
                      <input 
                        type="text" 
                        placeholder="organization name"
                        className="input input-bordered"
                        name="organization"
                        value={formData.organization}
                        onChange={handleChange}
                      />
                      <input 
                        type="email" 
                        placeholder="organization email"
                        className="input input-bordered"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <input 
                        type="tel" 
                        placeholder="organization phone"
                        className="input input-bordered"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                  </div>
                  <div className="flex flex-col gap-2">
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
                        placeholder="category"
                        className="input input-bordered"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                      <input 
                        type="text" 
                        placeholder="description"
                        className="input input-bordered"
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                      />
                      <input 
                        type="number" 
                        placeholder="renumeration"
                        className="input input-bordered"
                        name="renumeration"
                        value={formData.renumeration}
                        onChange={handleChange}
                      />
                  </div>
              </div>
              <button type="submit" className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Create Attachment</button>
          </form>
      </main>
    )
  }
  
  export default CreateAttachment