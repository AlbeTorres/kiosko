import { PropsWithChildren } from 'react'

const Container = ({ children }: PropsWithChildren) => (
  <div className='mx-auto w-11/12 lg:max-w-screen-lg h-full '>{children}</div>
)

export default Container
