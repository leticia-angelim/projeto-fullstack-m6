import React from "react";
import { Nav } from "./style";
import logo from "./Motors shop.png"
import { DivPersonalizada2 } from "./style";
import { DivPersonalizada1 } from "./style";
export const NavBar = () => {


  return (
    <Nav>
      <figure>
        <img src={logo} alt='logo da empresa' />
      </figure>
    <div>
      <DivPersonalizada1>


        <button>carros</button>
        <button>motos</button>
        <button>leilão</button>


      </DivPersonalizada1>



      <DivPersonalizada2>
      <span>fazer login</span>
      <button>cadastrar</button>
      </DivPersonalizada2>
    </div>
    </Nav>


  )
}

export default NavBar
