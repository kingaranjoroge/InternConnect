import { useState } from 'react';
import axios from 'axios'

const DeleteUser = () => {
  const [userId, setUserId] = useState('')

  const handleUserIdChange = (e) => {
    setUserId(e.target.value)
  }

  const handleDelete = async (e) => {
    e.preventDefault()

    try{
      await axios.delete(`https://internconnect-yg04.onrender.com/users/${userId}`)
      alert("User deleted successfully");

      // clear form data
      setUserId('')
    } catch (err) {
      alert("User not deleted successfully")
      console.error('Error deleting user:', err);
    }
  }

  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-blue-800 font-semibold">Delete User</h1>
        <form className="flex flex-row gap-4" onSubmit={handleDelete}>
          <div>
            <input 
              type="text" 
              placeholder="user id"
              className="input input-bordered"
              value={userId}
              onChange={handleUserIdChange}
            />
          </div>
          <button type='submit' className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Delete User</button>
        </form>
    </main>
  )
}

export default DeleteUser