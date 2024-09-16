import { useState } from "react"
import axios from 'axios'
import config from '../../../../config';

const CreateUser = () => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        email: '',
        phone: '',
        password: '',
        role: '',
        university: '',
        course: '',
        regNumber: ''
      });

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.post(`${config.serverUrl}/users`, formData);
          console.log(response.data);
          alert('User created successfully');

          // clear form data
            setFormData({
                name: '',
                username: '',
                email: '',
                phone: '',
                password: '',
                role: '',
                university: '',
                course: '',
                regNumber: ''
            });
        } catch (error) {
          console.error('Error creating user:', error);
          alert('User not created')
        }
      };

  return (
    <main className="flex flex-col gap-2">
        <h1 className="text-blue-800 font-semibold">Create User</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        placeholder="name e.g John Doe"
                        className="input input-bordered"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="username"
                        className="input input-bordered"
                        name="username"
                        value={formData.username}
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
                        type="password" 
                        placeholder="password"
                        className="input input-bordered"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        placeholder="role"
                        className="input input-bordered"
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="university"
                        className="input input-bordered"
                        name="university"
                        value={formData.university}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="course"
                        className="input input-bordered"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                    />
                    <input 
                        type="text" 
                        placeholder="registration number"
                        className="input input-bordered"
                        name="regNumber"
                        value={formData.regNumber}
                        onChange={handleChange}
                    />
                </div>
            </div>
            <button type="submit" className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Create User</button>
        </form>
    </main>
  )
}

export default CreateUser