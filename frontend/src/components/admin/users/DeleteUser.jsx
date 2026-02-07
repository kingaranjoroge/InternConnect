import { useState } from 'react';
import axios from 'axios'
import config from '../../../../config';

const DeleteUser = () => {
  const [userId, setUserId] = useState('')

  const handleUserIdChange = (e) => {
    setUserId(e.target.value)
  }

  const handleDelete = async (e) => {
    e.preventDefault()

    try{
      await axios.delete(`${config.serverUrl}/users/${userId}`)
      alert("User deleted successfully");

      // clear form data
      setUserId('')
    } catch (err) {
      alert("User not deleted successfully")
      console.error('Error deleting user:', err);
    }
  }

  return (
    <div className="card p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Delete User</h2>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleDelete}>
        <input type="text" placeholder="user id" className="input-field flex-1" value={userId} onChange={handleUserIdChange} />
        <button type="submit" className="btn-primary shrink-0 bg-red-600 hover:bg-red-700 focus:ring-red-500/30">Delete User</button>
      </form>
    </div>
  )
}

export default DeleteUser