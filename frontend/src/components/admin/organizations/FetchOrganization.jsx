import { useState } from "react"
import axios from 'axios'

const FetchOrganization = () => {
  const [organizationId, setOrganizationId] = useState('')
  
  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try{
      // Make a request for a user with a given ID
      const response = await axios.get(`http://localhost:3000/organizations/${organizationId}`)
      alert("Organization fetched successfully");
      console.log(response.data);

      // clear organization id after successful submission
      setOrganizationId('');
    } catch(error){
      alert("Error in fetching organization")
      console.error(`Error! ${error}`);
    }
  }

  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-blue-800 font-semibold">Fetch Organization</h1>
        <form className="flex flex-row gap-4"  onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              placeholder="organization id"
              className="input input-bordered"
              value={organizationId}
              onChange={handleOrganizationIdChange}
            />
          </div>
          <button type="submit" className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Fetch Organization</button>
        </form>
    </main>
  )
}

export default FetchOrganization