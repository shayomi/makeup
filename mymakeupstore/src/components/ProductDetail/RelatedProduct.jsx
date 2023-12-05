import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

const RelatedProduct = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://makeup-api.herokuapp.com/api/v1/products.json?product_type=eyeliner"
      )
      .then((response) => {
        setProducts(response.data);
      });
  }, []);

  // const ProductImage = ({ imageUrl, altImageUrl, altText }) => {
  //   const handleImageError = (event) => {
  //     // Replace the failed image with the alternative image
  //     event.target.src = altImageUrl;
  //   };

  //   return (
  //     <img
  //       src={imageUrl}
  //       alt={altText}
  //       onError={handleImageError}
  //       className="max-w-[100px] mx-auto mix-blend-multiply"
  //     />
  //   );
  // };

  return (
    <div className="w-[95%] mx-auto mt-10">
      <div className="flex flex-row justify-between px-0 lg:px-6 items-center">
        <h2 className="text-sm lg:text-xl font-secondary font-semibold text-dark">
          Related Products
        </h2>
        <NavLink to="/store">
          <button className="btn-primary">See more</button>{" "}
        </NavLink>
      </div>
      <div className=" grid grid-cols-2 md:grid-cols-4 gap-x-4 space-y-4 mt-12">
        {products.slice(0, 4).map((product) => {
          return (
            <div
              key={product.id}
              className="px-2 md:px-6 py-3 hover:shadow-xl ease-in-out duration-500 transition-all cursor-pointer  "
            >
              <NavLink to={`/${product.id}`}>
                <div className=" flex flex-col gap-y-4 justify-center text-center">
                  <div className="max-w-[100px]  h-[120px]">
                    <img
                      src={product.image_link}
                      alt="loading"
                      className="w-[80%] justify-center m mx-auto mix-blend-multiply"
                    />
                    {/* <ProductImage
                      imageUrl={product.image_link}
                      altImageUrl="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Floading&psig=AOvVaw0xGW1o3lEyEQ-EVW78ribi&ust=1701814143852000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIj1oe7l9oIDFQAAAAAdAAAAABAg"
                      altText="loading"
                    /> */}
                  </div>

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

export default RelatedProduct;
