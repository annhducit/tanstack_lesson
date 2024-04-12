import { NavLink, Outlet } from 'react-router-dom'
import logo from '@/assets/images/logo.png'

export default function MainLayout() {
  return (
    <div>
      <div className="flex items-center px-20 shadow-xl bg-grey-900 gap-x-6">
        <img src={logo} alt="" width={120} height={80} />
        <nav className="flex items-center py-4 text-white list-none gap-x-6">
          {navData.map((item) => (
            <li className="cursor-pointer" key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? 'text-emerald-500 font-semibold' : 'text-white font-semibold')}
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </nav>
      </div>
      <div className="mt-10">
        <Outlet />
      </div>
    </div>
  )
}

const navData = [
  {
    id: 1,
    name: 'Home',
    path: '/',
  },
  // {
  //   id: 2,
  //   name: 'Profile',
  //   path: '/profile',
  // },
  // {
  //   id: 3,
  //   name: 'Transaction',
  //   path: '/transactions',
  // },
  {
    id: 2,
    name: 'TanStack Query',
    path: '/task',
  },
  // {
  //   id: 5,
  //   name: 'User Context',
  //   path: '/context',
  // },
  {
    id: 3,
    name: 'TanStack Table',
    path: '/table-tanstack',
  },
]
