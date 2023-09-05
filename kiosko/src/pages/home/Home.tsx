import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import toast from 'react-hot-toast'
import { ProductList } from '../product/components/ProductList'

const Home = () => {
  const { verificado } = useParams()

  const token = localStorage.getItem('token')

  useEffect(() => {
    if (verificado) {
      toast.success('Usuario verificado')
    }
  }, [token])

  return <ProductList />
}

export default Home
