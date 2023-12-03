import React, { useState, useEffect } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import axios from "axios";

const Brands = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => {
        setBrands(response.data);
      });
  }, []);

  return (
    <div className="">
      {/* <h2 className="text-md font-secondary font-medium text-dark ">Brands</h2> */}
      <div className="relative flex flex-col items-center w-[150px]  rounded-[12px]">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="px-3 py-1 w-full flex flex-row items-center justify-between rounded-[12px] font-normal font-primary text-black text-sm border-2 border-transparent active:border-primary active:text-bold"
        >
          All
          {isOpen ? (
            <IoMdArrowDropup className="h-8" />
          ) : (
            <IoMdArrowDropdown className="h-8" />
          )}
        </button>
        {isOpen && (
          <div className="bg-white absolute top-[-9rem]">
            {brands.map((brand) => {
              return (
                <div key={brand.brand}>
                  <h2 className="text-black">{brand.brand}</h2>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Brands;
