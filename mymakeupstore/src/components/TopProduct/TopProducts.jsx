import React, { useState, useEffect } from "react";
import axios from "axios";

const baseUrl =
  "http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick";
const TopProducts = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(baseUrl).then((response) => {
      setProducts(response.data);
    });
  }, []);
  return (
    <div className="w-[95%] mx-auto mt-10">
      <div className="flex flex-row justify-between px-6">
        <h2 className="text-xl font-secondary font-semibold text-dark">
          Clean Beauty
        </h2>
        <button className="btn-primary">See more</button>
      </div>
      <div>
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="flex flex-col gap-y-4 items-center justify-center"
            >
              <div className="  mt-6">
                <img src={product.image_link} alt={product.name} />
                <h2 className="text-xl font-secondary font-semibold text-dark ">
                  {product.name}
                </h2>
                <h2 className="text-xl font-secondary font-semibold text-dark ">
                  $ {product.price}
                </h2>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TopProducts;
