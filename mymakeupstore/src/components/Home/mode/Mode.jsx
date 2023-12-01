import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { MdOutlineDeliveryDining, MdPayments } from "react-icons/md";
import { BsCartCheck } from "react-icons/bs";

const Mode = () => {
  return (
    <div className="w-[95%] mx-auto mt-24 ">
      <div className="flex flex-col sm:grid grid-cols-3 py-4 gap-y-4">
        <div className="flex flex-col md:flex-row gap-y-2 gap-x-6 px-6 hover:shadow-xl ease-in-out duration-500 transition-all py-4">
          <div className=" ">
            <TbTruckDelivery
              size={50}
              className="items-center  justify-center mx-auto my-auto fill-primary  "
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-xl text-center md:text-start font-secondary font-semibold text-dark ">
              Delivery
            </h2>
            <p className="font-primary text-sm text-dark leading-6  font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              dolorum voluptates beatae minima itaque debitis commodi enim hic
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 gap-x-6 px-6 hover:shadow-xl ease-in-out duration-500 transition-all py-4">
          <div className=" ">
            <MdPayments
              size={50}
              className="items-center  justify-center mx-auto my-auto fill-primary  "
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-xl text-center md:text-start font-secondary font-semibold text-dark ">
              Payments
            </h2>
            <p className="font-primary text-sm text-dark leading-6 font-normal">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              dolorum voluptates beatae minima itaque debitis commodi enim hic
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 gap-x-6 px-6 hover:shadow-xl ease-in-out duration-500 transition-all py-4">
          <div className=" ">
            <BsCartCheck
              size={50}
              className="items-center  justify-center mx-auto my-auto fill-primary "
            />
          </div>
          <div className="flex flex-col gap-y-4">
            <h2 className="text-xl text-center md:text-start font-secondary font-semibold text-dark ">
              Products
            </h2>
            <p className="font-primary text-sm text-dark leading-6 font-normal ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis
              dolorum voluptates beatae minima itaque debitis commodi enim hic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mode;
