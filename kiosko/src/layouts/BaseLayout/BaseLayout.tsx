import { PropsWithChildren, useState } from 'react'
import { Header } from './components/Header'
import Footer from './components/Footer'
import Container from '../utils/Container'
import { LogOutDialog } from './components/LogOutDialog'

const BaseLayout = ({ children }: PropsWithChildren) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <LogOutDialog open={open} onClose={() => setOpen(false)} />
      <Header handleOpen={() => setOpen(true)} />
      <div className='h-12'></div>
      <Container>{children}</Container>
      <Footer />
    </>
  )
}

export default BaseLayout
