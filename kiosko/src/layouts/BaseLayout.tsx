import { PropsWithChildren, useState } from 'react'

import Footer from './Footer'
import Container from './Container'
import { LogOutDialog } from './LogOutDialog'
import { useLocation } from 'react-router-dom'
import { Header } from './Header'

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
