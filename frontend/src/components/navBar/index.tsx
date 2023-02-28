import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../Button";
import logo from "../../assets/logo.svg";

import { Nav } from "./style";
import { DivPersonalizada1 } from "./style";
import { DivPersonalizada2 } from "./style";
import MobileMenu from "../MobileMenu";
import Dropdown from "../Dropdown";
import { UserContext } from "../../contexts/UserContext";
import { EditUserProfileModal } from "../EditUserProfileModal";

export const NavBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("@user:token");
  const { editUserModal } = useContext(UserContext);

  return token ? (
    <>
      <Nav>
        <figure onClick={() => navigate("/home", { replace: true })}>
          <img src={logo} alt="logo da empresa" />
        </figure>
        <div>
          <DivPersonalizada1>
            <a href="#Carros">Carros</a>
            <a href="#Motos">Motos</a>
            <a href="#Leilão">Leilão</a>
          </DivPersonalizada1>

          <Dropdown />
          {editUserModal && <EditUserProfileModal />}
        </div>
      </Nav>
      <MobileMenu />
    </>
  ) : (
    <>
      <Nav>
        <figure onClick={() => navigate("/home", { replace: true })}>
          <img src={logo} alt="logo da empresa" />
        </figure>
        <div>
          <DivPersonalizada1>
            <a href="#Carros">Carros</a>
            <a href="#Motos">Motos</a>
            <a href="#Leilão">Leilão</a>
          </DivPersonalizada1>

          <DivPersonalizada2>
            <span onClick={() => navigate("/login", { replace: true })}>
              Fazer login
            </span>
            <Button
              backgroundColor="#ffffff"
              backgroundColorHover="#212529"
              border="#212529"
              fontColor="#212529"
              fontColorHover="#ffffff"
              onClick={() => navigate("/register", { replace: true })}
            >
              Cadastrar
            </Button>
          </DivPersonalizada2>
        </div>
      </Nav>
      <MobileMenu />
    </>
  );
};

export default NavBar;
