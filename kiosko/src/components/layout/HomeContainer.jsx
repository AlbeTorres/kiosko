import React from "react";

const HomeContainer = ({ children }) => {

  const eso ='md:flex md:flex-row-reverse w-full md:grid-cols-2 md:justify-center'
  return (

    
     <div className="mx-auto w-11/12">
      {children}
    </div>
  );
};

export default HomeContainer;
