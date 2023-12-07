import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import CartContext from "../../store/CartContext";
import CartProvider from "../../store/CartProvider";

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products/${productId}.json`
      );
      setProduct(response.data);
      setLoading(false);
    };
    getProduct();
  }, []);

  const cartCtx = useContext(CartContext);
  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: product.id,
      image: product.image_link,
      title: product.name,
      amount: amount,
      price: product.price,
    });
  };

  const Loading = () => {
    return (
      <>
        <div className="flex flex-col w-full h-screen items-center justify-center">
          <Loader />
          <p className="font-primary text-dark text-sm font-medium pt-4">
            Loading ...
          </p>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <CartProvider>
        <div className="flex flex-col  md:flex-row gap-x-4 py-4 ">
          <div className="w-full">
            <img
              src={product.image_link}
              alt={product.name}
              className="max-w-[300px] w-[200px] mx-auto mix-blend-multiply items-center"
            />
          </div>
          <div className="flex flex-col gap-y-6 ">
            <h2 className="text-sm font-secondary font-semibold text-[#ffa6a4]">
              {product.brand}
            </h2>
            <h2 className="text-xl font-secondary font-semibold text-dark">
              {product.name}
            </h2>
            <div className="flex flex-col gap-y-4  md:flex-row  gap-x-5 ">
              <div className="flex flex-row gap-x-5 justify-between">
                <h2 className="text-md font-secondary font-semibold text-dark ">
                  $ {product.price}
                </h2>
                <div className="flex flex-row gap-x-4 items-center ml-4">
                  <MdOutlineRemove size={25} />

                  <span>
                    <h2 className="text-xl font-secondary font-semibold text-dark">
                      4
                    </h2>
                  </span>
                  <MdAdd size={25} />
                </div>
              </div>
              <button className="btn-primary md:ml-10 ml-0">Add to cart</button>
            </div>
            <p className="font-primary text-sm text-dark leading-7 text-justify font-normal mt-6 ">
              {product.description}
            </p>
          </div>
        </div>
      </CartProvider>
    );
  };
  return (
    <div className="w-[95%] lg:w-[80%] mx-auto pt-24">
      <div>{loading ? <Loading /> : <ShowProduct />}</div>
    </div>
  );
};

export default ProductDetails;
