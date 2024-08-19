import { Outlet } from 'react-router-dom'
import logo from '@/assets/logo.svg'
import background from '@/assets/background.png'

function AuthLayout() {
  return (
    <div className="container mx-auto grid grid-cols-2 gap-2 py-10">
      <aside>
        <header>
          <img src={logo} alt="logo 'marketplace, painel de vendedor'" />
        </header>
        <img src={background} alt="funcionalidades do dashboard" />
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default AuthLayout
