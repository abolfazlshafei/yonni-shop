import React from "react";
import Header from "../organize/Header";
import Footer from "../organize/Footer";
function Layout({children}) {
  return (
    <div className=" w-full mx-auto">
      <div className=" w-full mx-auto ">
        <Header />
        {children}
        <Footer/>
      </div>
      
    </div>
  );
}

export default Layout;