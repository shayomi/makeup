import React from "react";
import ProductDetail from "../components/ProductDetail/ProductDetail";
import RelatedProduct from "../components/ProductDetail/RelatedProduct";
import Bottombanner from "../components/Home/Bottombanner/Bottombanner";

const ProductDetails = () => {
  return (
    <div>
      <ProductDetail />
      <RelatedProduct />
      <div className="mb-24">
        <Bottombanner />
      </div>
    </div>
  );
};

export default ProductDetails;
