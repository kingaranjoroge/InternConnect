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
    <div className="card p-5">
      <h2 className="text-lg font-bold text-primary-900 mb-4">Delete Organization</h2>
      <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleDelete}>
        <input type="text" placeholder="organization id" className="input-field flex-1" value={organizationId} onChange={handleOrganizationIdChange} />
        <button type="submit" className="btn-primary shrink-0 bg-red-600 hover:bg-red-700 focus:ring-red-500/30">Delete Organization</button>
      </form>
    </div>
  )
}

export default DeleteOrganization