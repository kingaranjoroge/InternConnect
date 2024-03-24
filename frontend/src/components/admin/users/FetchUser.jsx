import { useState } from 'react';
import axios from 'axios';

const FetchUser = () => {
  const [userId, setUserId] = useState('')

  const handleUserIdChange = (e) => {
    setUserId(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try{
      const res = await axios.get(`http://localhost:3000/users/${userId}`)
      alert("User fetched successfully");
      console.log(res.data);

      // clear form data
      setUserId('')
    }catch(err){
      alert("User not fetched successfully")
      console.error('Error fetching user:', err);
    }

  }

  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-blue-800 font-semibold">Fetch User</h1>
        <form className="flex flex-row gap-4" onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              placeholder="user id"
              className="input input-bordered"
              value={userId}
              onChange={handleUserIdChange}
            />
          </div>
          <button type='submit' className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Fetch User</button>
        </form>
    </main>
  )
}

export default FetchUser