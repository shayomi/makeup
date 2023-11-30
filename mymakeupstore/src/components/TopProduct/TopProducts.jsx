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
          Cover Girl
        </h2>
        <button className="btn-primary">See more</button>
      </div>
      <div className="grid grid-cols-4 gap-x-4  mt-12">
        {products.map((product) => {
          return (
            <div
              key={product.id}
              className="px-6 py-3 hover:shadow-xl ease-in-out duration-500 transition-all cursor-pointer "
            >
              <div className=" flex flex-col gap-y-4 justify-center">
                <img
                  src={product.image_link}
                  alt={product.name}
                  className="max-w-[100px] mx-auto mix-blend-multiply"
                />
                <h2 className="text-md font-primary font-medium text-dark ">
                  {product.name.substring(0, 50) + " " + "..."}
                </h2>
                <h2 className="text-md font-secondary font-semibold text-dark ">
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
