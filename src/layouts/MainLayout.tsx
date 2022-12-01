import { Outlet, RouterProvider, Route } from 'react-router-dom'
import { Container } from 'MUI'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { ScrollToTop } from './ScrollToTop'
import './MainLayout.css'

export const MainLayout = () => (
  <>
    <Nav />
    <ScrollToTop />
    <main role="main">
      <Container maxWidth="lg" classes={{ root: 'containerRoot' }}>
        <Outlet />
      </Container>
    </main>
    <Footer />
  </>
)
