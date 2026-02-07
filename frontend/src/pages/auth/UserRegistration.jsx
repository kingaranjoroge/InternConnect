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
    setFormData({ ...formData, [e.target.name]: e.target.value })
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
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-50 via-white to-primary-50/30 px-4 py-12">
      <div className="card w-full max-w-2xl p-6 md:p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-primary-900">Register as Attachee / Intern</h1>
          <p className="text-slate-600 text-sm mt-1">Create your account to apply for attachments</p>
        </div>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Name</label>
              <input
                type="text"
                placeholder="e.g. John Doe"
                className="input-field"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Username</label>
              <input
                type="text"
                placeholder="username"
                className="input-field"
                name="username"
                value={formData.username}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
              <input
                type="email"
                placeholder="email@example.com"
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
                placeholder="phone"
                className="input-field"
                name="phone"
                value={formData.phone}
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
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Role</label>
              <input
                type="text"
                placeholder="e.g. attachee / intern"
                className="input-field"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">University</label>
              <input
                type="text"
                placeholder="university"
                className="input-field"
                name="university"
                value={formData.university}
                onChange={handleChange}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Course</label>
              <input
                type="text"
                placeholder="course"
                className="input-field"
                name="course"
                value={formData.course}
                onChange={handleChange}
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-1">Registration number</label>
              <input
                type="text"
                placeholder="registration number"
                className="input-field"
                name="regNumber"
                value={formData.regNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <button type="submit" className="btn-primary w-full py-3 mt-2">
            Register
          </button>
        </form>
      </div>
    </main>
  )
}

export default UserRegistration
