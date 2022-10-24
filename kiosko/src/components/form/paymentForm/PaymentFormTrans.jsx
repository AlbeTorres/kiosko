import React, { useState } from "react";
import qr from "../../../assets/qr-code.webp";
import AddImg from "../../img/AddImg";

const PaymentFormTrans = () => {
  let cantidad = 200;
  let tarjeta = "9254xxxxxxxxxxxxxx";

  const [visible, setVisible] = useState(false);

  return (
    <div className="card  flex-shrink-0 w-full  shadow-2xl bg-base-100 md:grid md:grid-cols-2 md:gap-4 md:items-start md:w-2/4       ">
      <div className="w-full grid place-items-center my-2">
        {visible ? (
          <figure className="h-44 w-44 my-2 md:w-48 md:h-48 ">
            <img src={qr} alt="" className="w-full h-full" />
          </figure>
        ) : (
          <div className="w-full my-2 ">
            <p className=" p-4 mx-auto max-w-fit">
              Realice el pago de {cantidad} a la siguiente cuenta empleando
              transfermovil
            </p>
            <p className=" text-xl p-4 text-center">{tarjeta}</p>
          </div>
        )}
        <button
          onClick={() => setVisible(!visible)}
          className="btn btn-primary my-2"
        >
          {visible ? "Ver tarjeta" : "Escanear QR"}
        </button>
      </div>
      <div className="w-full grid place-items-center my-2 ">
        <p className=" p-4 w-fit">Suba el mensaje de confirmación</p>
        <div className="h-44  w-44  md:w-48 md:h-48 ">
          <AddImg />
        </div>
      </div>
      <div className="w-full grid place-items-center my-2">
        <label htmlFor="my-modal-6" className="btn btn-primary w-3/4 my-2 ">
          Aceptar
        </label>
      </div>
    </div>
  );
};

export default PaymentFormTrans;
