import React, { useContext } from "react";
import EditAddressModal from "../../components/EditAddressModal";
import { UserContext } from "../../contexts/UserContext";

const ProfileUser = () => {
  const { setModalAddress } = useContext(UserContext);
  return (
    <>
      <button onClick={() => setModalAddress(true)}>Profile user</button>;
      <EditAddressModal />
    </>
  );
};

export default ProfileUser;
