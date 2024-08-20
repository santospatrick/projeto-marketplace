import { NavLink, Outlet, useLocation } from 'react-router-dom'
import LogoIcon from '@/assets/logo-icon.svg'
import { Button } from '@/components/ui/button'
import { ChartHistogramIcon, PackageIcon, PlusSignIcon } from 'hugeicons-react'
import { useCallback } from 'react'

function AppLayout() {
  const location = useLocation()
  const activeRoute = location.pathname

  const getVariantByRoute = useCallback(
    (route: string) => {
      return activeRoute === route ? 'secondary' : 'ghost'
    },
    [activeRoute],
  )

  return (
    <>
      <div className="flex justify-between p-5 border-b-[1px] border-shape">
        <img src={LogoIcon} alt="Logo apenas desenho" />
        <div className="flex gap-2">
          <Button variant={getVariantByRoute('/')} asChild>
            <NavLink to="/">
              <ChartHistogramIcon className="mr-2 size-5" /> Dashboard
            </NavLink>
          </Button>
          <Button variant={getVariantByRoute('/produtos')} asChild>
            <NavLink to="/produtos">
              <PackageIcon className="mr-2 size-5" /> Produtos
            </NavLink>
          </Button>
        </div>
        <Button className="bg-orange-base">
          <PlusSignIcon className="mr-2 size-5" /> Novo produto
        </Button>
      </div>
      <div className="container mx-auto py-10 font-poppins">
        <Outlet />
      </div>
    </>
  )
}

export default AppLayout
