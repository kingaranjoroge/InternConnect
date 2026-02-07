import AllUsers from "./AllUsers"
import CreateUser from "./CreateUser"
import UpdateUser from "./UpdateUser"
import FetchUser from "./FetchUser"
import DeleteUser from "./DeleteUser"

const Users = () => {
  return (
    <main className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto" style={{ minHeight: '70vh' }}>
      <section className="card w-full lg:w-1/2 overflow-auto max-h-[75vh] lg:max-h-none">
        <AllUsers />
      </section>
      <section className="flex flex-col gap-6 w-full lg:w-1/2">
        <CreateUser />
        <UpdateUser />
        <FetchUser />
        <DeleteUser />
      </section>
    </main>
  )
}

export default Users
