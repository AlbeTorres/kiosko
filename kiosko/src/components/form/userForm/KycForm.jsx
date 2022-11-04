import React,{useState} from 'react'
import AddImg from '../../img/AddImg'
import noimg from '../../../assets/noimg1.jpg'

const KycForm = () => {

    const [kyc, setKyc]=useState({
        kycimg:'',
        kyc_cloud_id:'',
    })

    const addImgKyc=(img, idimg)=>{
        setKyc({
          kycimg:img, 
          kyc_cloud_id:idimg
        }) 
    
    }

    const onSubmit=()=>{

    }

  return (
    <div className='modal-box md:grid md:grid-cols-2'>
        <div className="h-60 w-60 mx-auto md:w-full md:h-48 md:p-3 md:mr-5  rounded-md  ">
        <AddImg img={noimg} addImg={addImgKyc} />
      </div>
      <div className="modal-action mt-10 md:place-items-end">
          <label
            htmlFor="my-modal-6"
            onClick={() => onSubmit()}
            className="btn btn-primary "
          >
            Aceptar
          </label>
          <label htmlFor="my-modal-6" className="btn">
            Cancelar
          </label>
        </div>
    </div>
  )
}

export default KycForm