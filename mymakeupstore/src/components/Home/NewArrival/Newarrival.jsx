import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const Newarrivals = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://makeup-api.herokuapp.com/api/v1/products.json?brand=annabelle"
      )
      .then((response) => {
        setProducts(response.data);
      });
  }, []);
  return (
    <div className="w-[95%] mx-auto mt-10">
      <div className="flex flex-row justify-between px-0 lg:px-6 items-center">
        <h2 className="text-sm lg:text-xl font-secondary font-semibold text-dark">
          New Arrivals
        </h2>
        <NavLink to="/store">
          <button className="btn-primary">See more</button>{" "}
        </NavLink>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-x-4 space-y-4 mt-12">
        {products.slice(0, 12).map((product) => {
          return (
            <div
              key={product.id}
              className="px-2 md:px-6 py-3 hover:shadow-xl ease-in-out duration-500 transition-all cursor-pointer "
            >
              <NavLink to={`/${product.id}`}>
                <div className=" flex flex-col gap-y-4 justify-center text-center">
                  <img
                    src={product.image_link}
                    alt="loading"
                    className="max-w-[100px] mx-auto mix-blend-multiply"
                  />
                  <h2 className="text-md font-primary font-medium text-dark ">
                    {product.name.substring(0, 50) + " " + "..."}
                  </h2>
                  <h2 className="text-md font-secondary font-semibold text-dark ">
                    $ {product.price}
                  </h2>
                </div>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Newarrivals;
