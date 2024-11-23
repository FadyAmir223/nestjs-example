import { Camera } from 'lucide-react'
import { useUserById } from '@/hooks/useUserById'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'

const navs = [
  { url: '/', label: 'Personal Information' },
  { url: '/financial-info', label: 'Financial Information' },
]

export default function Card() {
  const user = useUserById(1)
  const { pathname } = useLocation()

  return (
    <div className='w-fit h-fit bg-white p-6 rounded-3xl shadow-[0px_4px_20px_0px_#EEEEEE80]'>
      <div className='w-[21.5625rem]'>
        <div className='relative w-fit mb-4'>
          <img
            src='/user.png'
            alt='Profile Picture'
            className='size-[7.5rem] rounded-[2.4375rem]'
          />
          <div className='absolute -bottom-2 -right-2 rounded-[3.125rem] p-2 bg-[#f0f0f0]'>
            <Camera size={24} />
          </div>
        </div>

        <div className=''>
          <h2 className='mb-2 capitalize text-[1.25rem] leading-[1.875rem] font-semibold'>
            {user?.firstName} {user?.fatherName}
          </h2>
          <p className='capitalize leading-5 text-_muted'>senior product manager</p>
        </div>
      </div>

      <div className='my-4 w-full h-[1px] bg-[#eceef1]' />

      <nav className='space-y-2'>
        {navs.map(({ url, label }) => (
          <Link
            key={url}
            to={url}
            className={cn(
              'block p-4 rounded-lg text-[1.125rem] leading-[1.6875rem text-_blue-dark',
              {
                'font-medium text-_blue bg-_grayish': url === pathname,
                'hover:text-_blue hover:bg-_grayish transition': url !== pathname,
              },
            )}
          >
            {label}
          </Link>
        ))}
      </nav>
    </div>
  )
}
