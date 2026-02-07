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
    <div className="card p-5">
        <h2 className="text-lg font-bold text-primary-900 mb-4">Update User</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">User ID</label>
              <input type="text" placeholder="user id" className="input-field" value={userId} onChange={handleUserIdChange} />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input type="text" placeholder="name" className="input-field" name="name" value={formData.name} onChange={handleChange} />
                <input type="text" placeholder="username" className="input-field" name="username" value={formData.username} onChange={handleChange} />
                <input type="email" placeholder="email" className="input-field" name="email" value={formData.email} onChange={handleChange} />
                <input type="tel" placeholder="phone" className="input-field" name="phone" value={formData.phone} onChange={handleChange} />
                <input type="password" placeholder="password" className="input-field" name="password" value={formData.password} onChange={handleChange} />
                <input type="text" placeholder="role" className="input-field" name="role" value={formData.role} onChange={handleChange} />
                <input type="text" placeholder="university" className="input-field" name="university" value={formData.university} onChange={handleChange} />
                <input type="text" placeholder="course" className="input-field" name="course" value={formData.course} onChange={handleChange} />
                <input type="text" placeholder="registration number" className="input-field sm:col-span-2" name="regNumber" value={formData.regNumber} onChange={handleChange} />
            </div>
            <button type="submit" className="btn-primary w-fit mt-1">Update User</button>
        </form>
    </div>
  )
}

export default UpdateUser