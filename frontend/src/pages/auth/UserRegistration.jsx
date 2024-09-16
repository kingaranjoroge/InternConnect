import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import config from "../../../config";

const UserRegistration = () => {
    const navigate = useNavigate()

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
    })

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            if (formData.role === 'admin') {
                alert("Please enter a valid role (e.g attachee/intern)")
            } else {
                const res = await axios.post(`${config.serverUrl}/users`, formData)
                console.log(res.data)
                alert('User created successfully')

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
                })

                navigate('/sign-in')
            }            
        }
        catch (err) {
            console.error('Error creating user:', err)
            alert('User not created')
        }

    }

  return (
    <main className="flex items-center justify-center w-screen h-screen">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
            <div className="flex items-center justify-center pb-3">
                <h1 className="text-blue-800 font-bold text-lg">Register</h1>
            </div>
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
                        placeholder="role (e.g attachee/intern)"
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
            <div className="flex items-center justify-center pb-3">
                <button type='submit' className="btn bg-blue-800 w-1/2 text-slate-200 hover:bg-blue-950">Register</button>
            </div>
        </form>
    </main>
  )
}

export default UserRegistration