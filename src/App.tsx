import { RouterProvider } from 'react-router-dom'
import './global.css'
import { router } from './routes'
import { queryClient } from './providers/react-query'
import { QueryClientProvider } from '@tanstack/react-query'

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}
