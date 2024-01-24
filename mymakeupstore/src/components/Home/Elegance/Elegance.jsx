import React from "react";
import elegance from "../../../assets/img/home/design.png";

const Elegance = () => {
  return (
    <div className="w-[95%] mx-auto mt-16 ">
      <div className="flex flex-col lg:flex-row gap-x-10 items-center">
        <div className="w-[100%] mx-auto flex justify-center">
          <img
            src={elegance}
            alt="image loading"
            className="max-w-[350px] w-[100%] justify-center "
          />
        </div>
        <div className="flex flex-col space-y-6 px-8 ">
          <h2 className="text-lg md:text-xl font-secondary font-semibold text-dark ">
            Elegance is what you Deserve
          </h2>
          <p className="font-primary text-[11px]  md:text-sm text-dark leading-7 text-justify font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. sapiente
            Quasi eaque quibusdam placeat rerum ex voluptatibus praesentium
            porro natus iste quo impedit ipsum culpa, nulla odio error saepe.
            Totam! praesentium porro natus iste quo impedit ipsum culpa, nulla
            odio error saepe. ndwweed
          </p>
          <p className="font-primary text-[11px]  md:text-sm text-dark leading-7 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
            sapiente! Quasi eaque quibusdam placeat rerum ex voluptatibus
            praesentium porro natus iste quo impedit ipsum culpa, nulla odio
            error saepe. Totam! praesentium porro natus iste quo impedit ipsum
            culpa, nulla odio error saepe. Tota
          </p>
        </div>
      </div>
    </div>
  );
};

export default Elegance;
