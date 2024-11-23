import { Users, LayoutGrid, ChartPie, FileText, Package } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/utils/cn'

const navs = [
  { icon: LayoutGrid, url: '/', label: 'Dashboard' },
  { icon: ChartPie, url: '/research', label: 'Research' },
  { icon: FileText, url: '/credit-report', label: 'Credit Report' },
  { icon: Users, url: '/teams', label: 'Teams' },
  { icon: Package, url: '/box', label: 'Box' },
]

export default function Sidebar() {
  const { pathname } = useLocation()

  return (
    <aside className='fixed inset-y-0 pt-10 px-[1.875rem] left-0 h-dvh bg-white'>
      <Link to='/'>
        <img src='/logo.svg' alt='logo' className='size-[2.8125rem] mb-10' />
      </Link>

      <nav className='flex flex-col gap-y-6 items-center'>
        {navs.map(({ icon: Icon, url, label }) => (
          <Link
            key={url}
            to={url}
            className={cn('rounded-2xl text-_muted p-3', {
              'bg-_primary  text-white': url === pathname,
              'hover:bg-_blue hover:text-white transition-colors': url !== pathname,
            })}
            aria-label={label}
          >
            <Icon size={24} />
          </Link>
        ))}
      </nav>
    </aside>
  )
}
