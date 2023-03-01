import React from "react";
import NavBar from "../../components/NavBar";
import { Footer } from "../../components/Footer";
import ProductDetail from "../../components/ProductDetail";
import { CommentsList } from "../../components/CommentsList";

const Product = () => {
  return (
    <>
      <NavBar />
      <ProductDetail />
      {/* <CommentsList /> */}
      <Footer />
    </>
  );
};

export default Product;
