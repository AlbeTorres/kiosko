import { PropsWithChildren, useState } from 'react'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Container from '../utils/Container'
import { LogOutDialog } from './components/LogOutDialog'
import { useLocation } from 'react-router-dom'

const BaseLayout = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)

  let location = useLocation()

  return (
    <>
      <LogOutDialog open={open} onClose={() => setOpen(false)} />
      {location.pathname.split('/')[1] !== 'account' && (
        <Header location={location} handleOpen={() => setOpen(true)} />
      )}
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default BaseLayout
