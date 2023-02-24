import React from "react";
import { Nav } from "./style";
import logo from "../../assets/logo.svg";
import { DivPersonalizada2 } from "./style";
import { DivPersonalizada1 } from "./style";
import Button from "../Button";
export const NavBar = () => {
  return (
    <Nav>
      <figure>
        <img src={logo} alt="logo da empresa" />
      </figure>
      <div>
        <DivPersonalizada1>
          <a href="#Carros">Carros</a>
          <a href="#Motos">Motos</a>
          <a href="#Leilão">Leilão</a>
        </DivPersonalizada1>

        <DivPersonalizada2>
          <span>Fazer login</span>
          <Button
            backgroundColor="#ffffff"
            backgroundColorHover="#212529"
            border="#212529"
            fontColor="#212529"
            fontColorHover="#ffffff"
          >
            Cadastrar
          </Button>
        </DivPersonalizada2>
      </div>
    </Nav>
  );
};

export default NavBar;
