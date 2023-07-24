import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { ProductList } from './components/ProductList'

const Home = () => {
  const busqueda = ''
  // const { usuario } = useContext(authContext);
  const { verificado } = useParams()

  const token = localStorage.getItem('token')

  // const { data: products, isSuccess, refetch } = useAllProducts()

  useEffect(() => {
    if (verificado) {
      toast.success('Usuario verificado')
    }
    // socket.on('hello', msg => {})

    // socket.on('newpedido', msg => {
    //   refetch()
    // })

    // socket.on('cambioestado', () => {
    //   refetch()
    // })
  }, [token])

  return (
    <>
      <ProductList />
    </>
  )
}

export default Home
