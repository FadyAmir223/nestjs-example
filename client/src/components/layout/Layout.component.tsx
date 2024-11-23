import { Outlet } from 'react-router-dom'
import Header from './Header.component'
import Sidebar from './Sidebar.component'
import Card from '../shared/Card.component'

export default function Layout() {
  return (
    <div className='bg-[#fafafa] min-h-dvh'>
      <Sidebar />

      <div className='ms-[8.25rem]'>
        <Header />

        {/* in real app this segment would be in a separate layout file */}
        <main className='flex flex-col gap-y-6 lg:flex-row lg:gap-x-6'>
          <Card />

          <div className='space-y-6'>
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}
