import React from "react";
import Sidebar from "./Sidebar";
import { UserData } from "@/context/userContext";

const Layout = ({ children }) => {
    
  return (
    <div>
     
          <Sidebar  />
          <div>{children}</div>
        </div>


   
  );
};

export default Layout;
