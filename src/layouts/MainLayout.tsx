import { Outlet, RouterProvider, Route } from 'react-router-dom'
import { Container } from 'MUI'
import { Nav } from 'components/Nav'
import { Footer } from 'components/Footer'
import { ScrollToTop } from './ScrollToTop'
import { votesRef } from 'db/dataAccess'
import { useObject } from 'react-firebase-hooks/database'
import './MainLayout.css'

export const MainLayout = () => {
  // const [snapshot, loading, error] = useObject(votesRef);
// console.log(snapshot?.val())
  return (
    <>
      <Nav />
      <ScrollToTop />
      <main role="main" className="Main">
        <Container maxWidth="lg" classes={{ root: 'containerRoot' }}>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </>
  )
}
