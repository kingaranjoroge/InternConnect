import { Routes, Route } from 'react-router-dom'
import Admin from "./pages/Admin"
import Register from './pages/auth/Register'
import UserRegistration from './pages/auth/UserRegistration'
import OrgRegistration from './pages/auth/OrgRegistration'
import Login from './pages/auth/Login'
import Attachments from './pages/Attachments'
import Home from './pages/Home'
import Application from './pages/Application'

const App = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='admin' element={<Admin />} />
      <Route path='sign-up' element={<Register />} />
      <Route path='user-registration' element={<UserRegistration />} />
      <Route path='org-registration' element={<OrgRegistration />} />
      <Route path='sign-in' element={<Login />} />
      <Route path='attachments' element={<Attachments />} />
      <Route path="application" element={<Application />} />
    </Routes>
  )
}

export default App