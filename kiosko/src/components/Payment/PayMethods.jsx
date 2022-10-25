import React from 'react'

const PayMethods = () => {
  return (
    <div className="md:w-2/3 md:mx-auto">
        <h2 className="text-center text-xl font-semibold my-5 ">
          Métodos de pago
        </h2>
        <div className="grid  place-items-center gap-y-4 ">
          <div className="card w-11/12 bg-base-100 shadow-xl image-full">
            <figure className="h-52 ">
              <img src={tarjeta} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Transferencia</h2>
              <p>Pague desde la comodidad de su móvil y priorice su pedido</p>
              <div className="card-actions justify-end">
                <label className="btn btn-primary" htmlFor="my-modal-6"
                  onClick={() => establecerAccionAux("pagotransfer")}>Pagar</label>
              </div>
            </div>
          </div>
          <div className="card w-11/12 bg-base-100 shadow-xl image-full">
            <figure className="h-52 ">
              <img src={cup} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Efectivo</h2>
              <p>Pague en efectivo en cuanto reciba su pedido</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Pagar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default PayMethods