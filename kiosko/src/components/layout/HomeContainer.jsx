import React from "react";

const HomeContainer = ({ children }) => {

  const eso ='md:flex md:flex-row-reverse w-full md:grid-cols-2 md:justify-center'
  return (

    
     <div className="  ">
      {children}
    </div>
  );
};

export default HomeContainer;
