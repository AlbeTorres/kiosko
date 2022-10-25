import React, {useContext} from "react";
import productoContext from "../../context/productoContext/productoContext";
import PayNav from "../../components/Payment/PayNav";
import PayContainer from '../../components/Payment/PayContainer'
import PayForm from '../../components/Payment/PayForm'
import Pedido from "../../components/Payment/Pedido";

const Paymen = () => {

  const { establecerAccion } = useContext(productoContext);

  const establecerAccionAux = (accion) => {
    establecerAccion({ accion });
    
  };

  return (
    <div >
     <PayNav/>
     <PayContainer>
      <PayForm/>
      <Pedido/>
     </PayContainer>

    </div>
  );
};

export default Paymen;
