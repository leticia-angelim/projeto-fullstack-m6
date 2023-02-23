import React from "react";
import Slider from "./components/Slider";
import { ProductCard } from "./components/ProductCard";

import Routes from "./routes";
import { GlobalStyle } from "./styles/global";

const App = () => {
  return (
    <>
      {/* <Routes /> */}
      <GlobalStyle />
      <Slider title="Carros" children={<ProductCard />} />
    </>
  );
};

export default App;
