import React, { useContext } from "react";
import EliminarProducto from "../form/productoForm/EliminarProducto";
import ModificarProducto from "../form/productoForm/ModificarProducto";
import productoContext from "../../context/productoContext/productoContext";
import CrearProducto from "../form/productoForm/CrearProducto";
import CarritoCompras from "../carro/CarritoCompras";
import Login from '../form/userForm/auth/Login'
import Register from "../form/userForm/auth/Register";
import PaymentFormTrans from "../form/paymentForm/PaymentFormTrans";
import PerfilForm from "../form/userForm/PerfilForm";
import KycForm from "../form/userForm/KycForm";
import PedidoView from "../pedidos/PedidoView";
import AdminUserForm from "../form/adminform/AdminUserForm";
import AdminKycForm from "../form/adminform/AdminKycForm";

const Modal = () => {
  const { accion } = useContext(productoContext);

  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle overflow-y-auto" />
      <div className="modal modal-bottom sm:modal-middle">
        {accion?.accion === "crearproducto" &&
          <div className="w-full flex items-center justify-center ">
          <CrearProducto/>
          </div>}
        {accion?.accion === "modificar" &&
          <div className="w-full flex items-center justify-center ">
          <ModificarProducto/>
          </div>}
        {accion?.accion === "eliminar" &&
          <div className="w-full flex items-center justify-center ">
          <EliminarProducto/>
          </div>}
        {accion?.accion === "carro" &&
          <div className="w-full flex items-center justify-center ">
          <CarritoCompras/>
          </div>}
        {accion?.accion === "login" &&
          <div className="w-full flex items-center justify-center ">
          <Login/>
          </div>}
        {accion?.accion === "registro" &&
          <div className="w-full flex items-center justify-center ">
          <Register/>
          </div>}
        {accion?.accion === "pagotransfer" &&
          <div className="w-full flex items-center justify-center ">
          <PaymentFormTrans/>
          </div>}
        {accion?.accion === "editarperfil" &&
          <div className="w-full flex items-center justify-center ">
          <PerfilForm/>
          </div>}
        {accion?.accion === "crearkyc" &&
          <div className="w-full flex items-center justify-center ">
          <KycForm/>
          </div>}
        {accion?.accion === "pedido" &&
          <div className="w-full flex items-center justify-center ">
          <PedidoView/>
          </div>}
        {accion?.accion === "adminuser" &&
          <div className="w-full flex items-center justify-center ">
          <AdminUserForm/>
          </div>}
        {accion?.accion === "validarkyc" &&
          <div className="w-full flex items-center justify-center ">
          <AdminKycForm/>
          </div>}
      </div>
    </div>
  );
};

export default Modal;
