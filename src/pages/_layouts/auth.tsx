import { Outlet } from 'react-router-dom'

function AuthLayout() {
  return (
    <div>
      Header (Authenticated)
      <Outlet />
    </div>
  )
}

export default AuthLayout
