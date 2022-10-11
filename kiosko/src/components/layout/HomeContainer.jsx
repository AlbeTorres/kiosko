import React from "react";

const HomeContainer = ({ children }) => {
  return (
    <div className=" md:flex md:flex-row-reverse w-full md:grid-cols-2 md:justify-center ">
      {children}
    </div>
  );
};

export default HomeContainer;
