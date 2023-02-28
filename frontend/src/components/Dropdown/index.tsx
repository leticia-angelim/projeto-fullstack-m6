import React, { MouseEvent, useContext, useState } from "react";

import { UserContext } from "../../contexts/UserContext";
import nameAbbreviate from "../../util/nameAbbreviate";
import stringToColor from "../../util/stringToColor";

import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { Container } from "./styles";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const { user, setUser, setEditUserModal, setAddressModal } =
    useContext(UserContext);

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const stringAvatar = (name: string) => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: nameAbbreviate(name),
    };
  };

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <IconButton
        id="basic-button"
        color="inherit"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar {...stringAvatar(user ? user.name : "null")} />
        {user?.name}
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => setEditUserModal(true)}>
          Editar perfil
        </MenuItem>
        <MenuItem onClick={() => setAddressModal(true)}>
          Editar endereço
        </MenuItem>
        <MenuItem>Minhas compras</MenuItem>
        <MenuItem
          onClick={() => {
            localStorage.clear();
            setUser(null);
            navigate("/login", { replace: true });
          }}
        >
          Sair
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default Dropdown;
