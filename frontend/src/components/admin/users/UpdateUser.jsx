import { useState } from "react"
import axios from 'axios'
import config from '../../../../config';

const UpdateUser = () => {
    const [userId, setUserId] = useState('');
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

      const handleUserIdChange = (e) => {
        setUserId(e.target.value);
      }

      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await axios.patch(`${config.serverUrl}/users/${userId}`, formData);
          // Optionally, you can handle success here, like showing a success message or redirecting
          alert('User updated successfully');
          console.log(response.data);
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
          // Handle error
          console.error('Error updating user:', error);
          alert("User not updated")
        }
      };

  return (
    <main className="flex flex-col gap-2">
        <h1 className="text-blue-800 font-semibold">Update User</h1>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="flex flex-col gap-2">
                    <input 
                        type="text" 
                        placeholder="userID"
                        className="input input-bordered"
                        value={userId}
                        onChange={handleUserIdChange}
                    />
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
                </div>
                <div className="flex flex-col gap-2">
                    <input 
                        type="password" 
                        placeholder="password"
                        className="input input-bordered"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
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
            <button type="submit" className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Update User</button>
    </form>
    </main>
  )
}

export default UpdateUser