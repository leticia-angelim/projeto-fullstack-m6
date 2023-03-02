import React, { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import ModalContainer from "../ModalContainer";

const ForgotPasswordModal = () => {
  const { forgotPasswordModal, setForgotPasswordModal } =
    useContext(UserContext);

  return (
    <ModalContainer
      openModal={forgotPasswordModal}
      closeModal={() => setForgotPasswordModal(false)}
      title="Recuperar senha"
    >
      <h4>Informe seu email para a recuperação da senha</h4>
    </ModalContainer>
  );
};

export default ForgotPasswordModal;
