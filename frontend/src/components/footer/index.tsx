
import { ContainerF } from "./style";
import React from "react";
import logo from "./motorsshop.png"
import direitos from "./direitos.png"



export const Footer = ()=>{ return (
    <ContainerF >
      <div>
     <figure className="figu1">
      <img src={logo} alt="Logo da empresa" />
     </figure>

     <figure>
      <img src={direitos} alt="Logo da empresa" />
     </figure>

     <button>
      ^
     </button>
     </div>
    </ContainerF>
  
  )}
   

        
    