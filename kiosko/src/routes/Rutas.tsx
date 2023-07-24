import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import AuthenticateAccount from '../pages/auth/AuthenticateAccount'
import { Login } from '../pages/auth'
import { Singup } from '../pages/auth'
import Product from '../pages/product/Product.page'

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/:verificado' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/login/:goback' element={<Login />} />
      <Route path='/singup' element={<Singup />} />
      <Route path='/singup/:goback' element={<Singup />} />
      <Route path='/verify-email/:emailToken' element={<AuthenticateAccount />} />
      <Route path='/product/:id' element={<Product />} />

      <Route path='*' element={<> Not Found</>} />

      {/* <Route element={<AuthGuard />}>
        <Route path="/paymen" element={<Paymen />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/adminuser" element={<AdminUser />} />
        <Route path="/adminpedido" element={<AdminPedidos />} />
        <Route path="/pedido/:id" element={<PedidoDetails />} />
      </Route> */}
    </Routes>
  )
}

export default Rutas
