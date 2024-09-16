import { useState } from 'react';
import axios from 'axios'
import config from '../../../../config';

const DeleteOrganization = () => {
  const [organizationId, setOrganizationId] = useState('')

  const handleOrganizationIdChange = (e) => {
    setOrganizationId(e.target.value)
  }

  const handleDelete = async (e) => {
    e.preventDefault()

    try{
      await axios.delete(`${config.serverUrl}/organizations/${organizationId}`)
      alert("Organization deleted successfully");

      // clear organization id
      setOrganizationId('')
    } catch (err) {
      alert("Organization not deleted successfully")
      console.error('Error deleting organization:', err);
    }

  }

  return (
    <main className="flex flex-col gap-2">
      <h1 className="text-blue-800 font-semibold">Delete Organization</h1>
        <form className="flex flex-row gap-4" onSubmit={handleDelete}>
          <div>
            <input 
              type="text" 
              placeholder="organization id"
              className="input input-bordered"
              value={organizationId}
              onChange={handleOrganizationIdChange}
            />
          </div>
          <button type="submit" className="btn bg-blue-800 w-1/4 text-slate-200 hover:bg-blue-950">Delete Organization</button>
        </form>
    </main>
  )
}

export default DeleteOrganization