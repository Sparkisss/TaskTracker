import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/HomePage'
import Daily from './pages/Daily'
import Weekly from './pages/Weekly'
import DayOfWeek from './pages/DayOfWeek'

import './styles/index.scss'
import NotFoundPage from './pages/NotFoundPage'

const router = createBrowserRouter([
  {
    path: '/', element: <HomePage/>,
    errorElement: <NotFoundPage />
  },
  {
    path: '/daily', element: <Daily/>
  },
  {
    path: '/weekly', element: <Weekly/>,
    children: [
      {
        path: '/weekly/:day', element: <DayOfWeek/>
      }
    ]
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
