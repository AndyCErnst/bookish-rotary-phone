import { createBrowserRouter } from 'react-router-dom'
import { MainLayout } from 'layouts/MainLayout'
import { ErrorPage } from '../pages/ErrorPage/ErrorPage'
import { BroadsideView } from '../pages/BroadsideView/BroadsideView'
import { MapView } from '../pages/MapPage/index'
import { AboutBroadsides } from '../pages/Overview/AboutBroadsides'
import { Topic } from '../pages/Overview/index'
import { LandingPage } from '../pages/LandingPage/index'
import { Now } from '../pages/NowPage/index'
import { Search } from '../pages/SearchPage/index'
import { OurWork } from '../pages/OurWork/index'


export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <LandingPage />
      },
      {
        path: '/topic/:topic',
        element: <Topic />
      },
      {
        path: '/summary',
        element: <AboutBroadsides />
      },
      {
        path: '/broadsides/:id',
        element: <BroadsideView />,
      },
      {
        path: '/map',
        element: <MapView />
      },
      {
        path: '/now',
        element: <Now />,
      },
      {
        path: '/our-work',
        element: <OurWork />,
      },
      {
        path: '/search',
        element: <Search />,
      }
    ],
  },
])
