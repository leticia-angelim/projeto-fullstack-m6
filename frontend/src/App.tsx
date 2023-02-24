import React, { useContext } from "react";
import DeleteAnnouncementModal from "./components/DeleteAnnouncementModal";
import EditAnnouncementModal from "./components/EditAnnouncementModal";
import { AnnouncementContext } from "./contexts/AnnouncementContext";

import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  const { setEditModal } = useContext(AnnouncementContext);

  return (
    <>
      {/* <Routes /> */}
      <GlobalStyle />
      <button onClick={() => setEditModal(true)}>click</button>
      <EditAnnouncementModal />
      <DeleteAnnouncementModal />
    </>
  );
};

export default App;
