import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../pages/home/Home'
import AuthenticateAccount from '../pages/auth/AuthenticateAccount'
import { Login } from '../pages/auth'
import { Singup } from '../pages/auth'
import Product from '../pages/product/Product.page'
import { ShopCart } from '../pages/shopping'
import AuthGuard from './AuthGuard'
import Checkout from '../pages/checkout/index.page'
import GeneralInformation from '../pages/account/GeneralInformation'
import { DeliveryList } from '../pages/account/Deliveries/DeliveryList'
import RecoverPassEmail from '../pages/auth/RecoverPassEmail'
import RecoveryPass from '../pages/auth/RecoveryPass'
import DeliveryDetails from '../pages/account/Deliveries/DeliveryDetails'

const Rutas = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/recoverypassemail' element={<RecoverPassEmail />} />
      <Route path='/recoverypass/:email' element={<RecoveryPass />} />
      <Route path='/:verificado' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/login/:goback' element={<Login />} />
      <Route path='/singup' element={<Singup />} />
      <Route path='/singup/:goback' element={<Singup />} />
      <Route path='/verify-email/:emailToken' element={<AuthenticateAccount />} />
      <Route path='/product/:id' element={<Product />} />
      <Route path='/shopcart' element={<ShopCart />} />

      <Route path='*' element={<> Not Found</>} />

      <Route element={<AuthGuard />}>
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/account' element={<GeneralInformation />} />
        <Route path='/account/deliverys' element={<DeliveryList />} />
        <Route path='/account/deliverys/:id' element={<DeliveryDetails />} />
      </Route>
    </Routes>
  )
}

export default Rutas
