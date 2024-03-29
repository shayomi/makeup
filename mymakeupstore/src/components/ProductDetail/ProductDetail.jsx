import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../Loader";
import { MdAdd, MdOutlineRemove } from "react-icons/md";
import CartContext from "../../store/CartContext";
import CartProvider from "../../store/CartProvider";
import ProductForm from "./ProductForm";
import placeholder from "../../assets/img/store/placeholder.png";

const ProductDetails = (props) => {
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
              onError={(e) => {
                e.target.src = placeholder; // Replace with placeholder image
                e.target.onerror = null; // Prevent infinite loop if placeholder image fails to load
              }}
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
              <div className="flex flex-col gap-x-5 justify-between ">
                <h2 className="text-md font-secondary font-semibold text-dark ">
                  $ {product.price}
                </h2>
                <div className="">
                  {/* <MdOutlineRemove size={25} />

                  <span>
                    <h2 className="text-xl font-secondary font-semibold text-dark">
                      4
                    </h2>
                  </span>
                  <MdAdd size={25} /> */}
                  <ProductForm onAddToCart={addToCartHandler} />
                </div>
              </div>
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
