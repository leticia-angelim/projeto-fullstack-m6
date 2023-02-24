import React from "react";
import { Nav } from "./style";
import logo from "./Motors shop.png"
import { DivPersonalizada2 } from "./style";
import { DivPersonalizada1 } from "./style";
import { DivLinha } from "./style";

export const NavBar = () => {


  return (
    <Nav>
      <figure>
        <img src={logo} alt='logo da empresa' />
      </figure>
    <div>
      <DivPersonalizada1>


        <button>Carros</button>
        <button>Motos</button>
        <button>Leilão</button>


      </DivPersonalizada1>
    

      <DivLinha></DivLinha>


      <DivPersonalizada2>
      <span>Fazer login</span>
      <hr />
      <button>Cadastrar</button>
      </DivPersonalizada2>
    </div>
    </Nav>


  )
}

export default NavBar

