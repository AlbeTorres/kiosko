import React, {useState} from 'react';
import { FaPlus } from 'react-icons/fa';
import { fileUpload } from '../../util/cloudinaryManage';

const AddImg = ({img,addImg}) => {

    const [load, setLoad]=useState(false);

    const onImgSelect = async(e) => {
        let imgArray = e.target.files;
        console.log(imgArray)
    
        setLoad(true);
        let objectUrl = await fileUpload(imgArray[0]);
        setLoad(false);
    
        addImg(objectUrl.img, objectUrl.id);
      };
    
      return (
        <div  className="w-full h-full rounded-md " >
          {!load ? (
            <div className="w-full h-full rounded-md ">
              <label
                htmlFor="formTrabImg"
                className="w-full mx-auto h-full block relative cursor-pointer rounded-md"
              >
                <img
                  src={img}
                  alt=""
                  className="object-cover w-full h-full rounded-md "
                />
                <FaPlus className=" absolute bottom-1 right-2 text-white text-4xl bg-gray-800 rounded-full p-1 shadow-md"></FaPlus>
              </label>
              <input
                id="formTrabImg"
                type={"file"}
                alt={""}
                className="hidden h-full w-full"
                onChange={onImgSelect}
                accept="image/* "
              />
            </div>
          ) : (
            <div className="w-full h-56 flex items-center justify-center bg-green-600 ">
              <div className="lds-dual-ring"></div>
            </div>
          )}
        </div>
      );
    };

export default AddImg;