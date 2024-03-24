import AllUsers from "./AllUsers"
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"
import FetchUser from "./FetchUser"
import DeleteUser from "./DeleteUser"

const Users = () => {
  return (
    <main className="flex flex-row gap-4 px-4 py-4" style={{ minHeight: '90vh' }}>
      <section className="bg-slate-200 w-1/2 rounded overflow-auto">
        <AllUsers />
      </section>
      <section className="flex flex-col gap-6 bg-slate-200 w-1/2 rounded p-4">
        <CreateUser />
        <UpdateUser />
        <FetchUser />
        <DeleteUser />
      </section>
    </main>    
  )
}

export default Users