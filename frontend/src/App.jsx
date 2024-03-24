import { Routes, Route } from 'react-router-dom'
import Admin from "./pages/Admin"
import Register from './pages/auth/Register'
import UserRegistration from './pages/auth/UserRegistration'
import OrgRegistration from './pages/auth/OrgRegistration'
import Login from './pages/auth/Login'
import Attachments from './components/attachments/Attachments'

const App = () => {
  return (
    <Routes>
      <Route index element={<Attachments />} />
      <Route path='admin' element={<Admin />} />
      <Route path='sign-up' element={<Register />} />
      <Route path='user-registration' element={<UserRegistration />} />
      <Route path='org-registration' element={<OrgRegistration />} />
      <Route path='sign-in' element={<Login />} />
    </Routes>
  )
}

export default App