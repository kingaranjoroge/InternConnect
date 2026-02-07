import AllOrganizations from './AllOrganizations'
import CreateOrganization from './CreateOrganization'
import UpdateOrganization from './UpdateOrganization'
import FetchOrganization from './FetchOrganization'
import DeleteOrganization from './DeleteOrganization'

const Organization = () => {
  return (
    <main className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto" style={{ minHeight: '70vh' }}>
      <section className="card w-full lg:w-1/2 overflow-auto max-h-[75vh] lg:max-h-none">
        <AllOrganizations />
      </section>
      <section className="flex flex-col gap-6 w-full lg:w-1/2">
        <div className="flex flex-col sm:flex-row gap-6">
          <CreateOrganization />
          <UpdateOrganization />
        </div>
        <FetchOrganization />
        <DeleteOrganization />
      </section>
    </main>
  )
}

export default Organization
