import { Routes, Route, Navigate } from 'react-router-dom'
import Admin from "./pages/Admin"
import Register from './pages/auth/Register'
import UserRegistration from './pages/auth/UserRegistration'
import OrgRegistration from './pages/auth/OrgRegistration'
import Login from './pages/auth/Login'
import Attachments from './pages/Attachments'
import Home from './pages/Home'
import Application from './pages/Application'
import Logout from './pages/auth/Logout'
import OrgAdmin from './pages/OrgAdmin'
import OrgLogin from './pages/auth/OrgLogin'

const App = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const org = JSON.parse(localStorage.getItem('org'));

  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='admin' element={user && user.role === 'admin' ? <Admin /> : <Navigate to="/" />} />
      <Route path='sign-up' element={<Register />} />
      <Route path='user-registration' element={<UserRegistration />} />
      <Route path='org-registration' element={<OrgRegistration />} />
      <Route path='sign-in' element={<Login />} />
      <Route path='attachments' element={<Attachments />} />
      <Route path="application" element={<Application />} />
      <Route path="sign-out" element={<Logout />} />
      <Route path='org-admin' element={user && user.role === 'admin' || org && org.role === 'org' ? <OrgAdmin /> : <Navigate to="/" />} />
      <Route path="org-signin" element={<OrgLogin />}/>
    </Routes>
  )
}

export default App;