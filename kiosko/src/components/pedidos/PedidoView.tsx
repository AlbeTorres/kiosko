import { useContext } from "react";
import authContext from "../../context/authContext/authContext";
import PedidoItem from "./PedidoItem";
import { usePedidos } from "../../hooks/api/pedido.hook";
import { Spinner } from "../../components-libs/Spinner";

const PedidoView = () => {
  const { usuario } = useContext(authContext);

  const { data, isSuccess } = usePedidos();

  return (
    <div className="modal-box">
      <h2 className="my-2 text-xl">Pedidos:</h2>
      {isSuccess ? (
        <div className=" overflow-y-scroll h-72 xs:p-2">
          {data.pedidos.map((pedido) => {
            if (
              pedido.usuario === usuario?._id &&
              pedido.estado !== "terminado" &&
              pedido.estado !== "cancelado"
            ) {
              return (
                <PedidoItem
                  key={pedido._id}
                  id={pedido._id}
                  productos={pedido.productos}
                  pago={pedido.pago}
                  valor={pedido.valor}
                  estado={pedido.estado}
                />
              );
            }
          })}
        </div>
      ) : (
        <div>
          <Spinner />
        </div>
      )}

      {/* <div className='my-2'>
          <div className='flex items-center'>
            <h2 className='mr-1'>Monto total:</h2>
            <p><span>$</span>{monto_total}</p> 
          </div>

          {descuento && 
          <div className='flex items-center text-red-600 '>
            <h2  className='mr-1'>Descuento: </h2>
            <p>-20<span>%</span></p>
          </div>
        }
          <div className='flex items-center '>
            <h2  className='mr-1'>A pagar:</h2>
            <p><span>$</span>{a_pagar}</p>
          </div>
  
      </div> */}

      <div className="flex  items-center mt-5 w-full justify-end">
        <label htmlFor="my-modal-6" className="btn">
          Cerrar
        </label>
      </div>
    </div>
  );
};

export default PedidoView;
