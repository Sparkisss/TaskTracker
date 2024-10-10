import { createBrowserRouter, RouteObject } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import Daily from '../pages/Daily'
import Weekly from '../pages/Weekly'
import DayOfWeek from '../pages/DayOfWeek'
import NotFoundPage from '../pages/NotFoundPage'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage/>,
    errorElement: <NotFoundPage />
  },
  {
    path: '/daily',
    element: <Daily/>
  },
  {
    path: '/weekly',
    element: <Weekly/>,
    children: [
      {
        path: ':day',
        element: <DayOfWeek/>
      }
    ]
  },
]

export const router = createBrowserRouter(routes)