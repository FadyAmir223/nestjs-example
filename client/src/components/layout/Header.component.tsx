import { Breadcrumbs, Link as MuiLink, Typography } from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { Bell, Mail, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useUserById } from '@/hooks/useUserById'

export default function Header() {
  const user = useUserById(1)
  const username = `${user?.firstName} ${user?.fatherName}`

  return (
    <header className='flex justify-between items-center px-10 py-6 mb-6'>
      <div className=''>
        <h1 className='text-_foreground text-[1.625rem] leading-[2.4375rem] font-semibold tracking-wider mb-2'>
          {username} Profile
        </h1>

        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          <MuiLink
            href='/'
            underline='hover'
            className='!text-_muted2 !text-[0.75rem] !leading-4'
          >
            Dashboard
          </MuiLink>
          <MuiLink
            href='/manage'
            underline='hover'
            className='!text-_muted2 !text-[0.75rem] !leading-4'
          >
            HR Manage
          </MuiLink>
          <MuiLink
            underline='hover'
            href='/employees'
            className='!text-_muted2 !text-[0.75rem] !leading-4'
          >
            Employees
          </MuiLink>
          <Typography
            color='text.primary'
            className='!text-_primary !text-[0.75rem] !leading-4'
          >
            {username} Profile
          </Typography>
        </Breadcrumbs>
      </div>

      <div className='flex justify-between items-center gap-x-[2.0625rem]'>
        <div className='flex justify-between items-center gap-x-4'>
          <button className='relative' aria-label='Notifications'>
            <Bell size={24} />
            <div className='absolute top-[-2px] right-[1px] rounded-full size-[0.625rem] bg-gradient-to-r from-[#b22234] to-[#ff0020]' />
          </button>

          <button className='relative' aria-label='Emails'>
            <Mail size={24} />
          </button>

          <button className='relative' aria-label='Settings'>
            <Settings size={24} />
          </button>
        </div>

        <Link to='/profile'>
          <img
            src='/user.png'
            alt='Profile Image'
            className='size-10 rounded-full'
          />
        </Link>
      </div>
    </header>
  )
}
