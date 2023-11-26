import React from "react";
import { FaFacebookF, FaTwitter, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark max-w-[1240px] w-full ">
      <div className=" flex flex-col md:flex-row justify-around w-[95%] mx-auto  py-12">
        <div className=" text-primary font-secondary font-bold text-[32px] px-6  items-start flex flex-col">
          <a href="#" className="text-[32px] font-bold text-primary">
            Gentee
          </a>
          <p className="text-white-100 text-sm font-normal font-secondary">
            Your number on cosmestics store
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 md:mt-0">
          <div>
            <ul className="flex flex-col gap-y-2 justify-center text-white-100 text-sm">
              <li>
                <a href="/">about</a>
              </li>
              <li>
                <a href="/">Skincare</a>
              </li>
              <li>
                <a href="/">Make ups</a>
              </li>
              <li>
                <a href="/">Supplements</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
              <li>
                <a href="/">Careers</a>
              </li>
              <li>
                <a href="/">Affliates</a>
              </li>
              <li>
                <a href="/">Supply Chain Transparency</a>
              </li>
            </ul>
          </div>
          <div className=" flex flex-col gap-y-12">
            <ul className="flex flex-col gap-y-2 justify-center text-white-100 text-sm">
              <li>SkinCare</li>
              <li>Fragnace</li>
              <li>Services</li>
              <li>Games</li>
            </ul>
            <ul className="flex flex-col gap-y-2 justify-center text-white-100 text-sm">
              <li>Location</li>
              <li>Address</li>
              <li>Contacts</li>
              <li>Countries</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-y-12">
            <ul className="flex flex-col gap-y-2 justify-center text-white-100 text-sm">
              <li>Make up</li>
              <li>Skin Care</li>
              <li>Cosmetics</li>
              <li>Accessories</li>
            </ul>
            <ul className="flex flex-col gap-y-2 justify-center text-white-100 text-sm">
              <li>Shops</li>
              <li>Fragnance</li>
              <li>Supplements</li>
              <li>Gentee</li>
              <li>Sales</li>
            </ul>
          </div>
          <div className=" flex flex-col gap-y-12">
            <ul className="flex flex-col gap-y-2 justify-center text-white-100 text-sm">
              <li>Women</li>
              <li>Wholesalers</li>
              <li>Individuals</li>
              <li>Men</li>
            </ul>
            <ul className="flex flex-col gap-y-2 justify-center text-white-100 text-sm">
              <li>Tel : +2345975849</li>
              <li>Fax : +344342652346</li>
              <li>Email : Gentee@shop.com</li>
            </ul>
          </div>
          <div className="">
            <ul className="flex flex-row mt-8 md:mt-0 md:flex-col gap-y-12 justify-start md:justify-center text-white-100">
              <li>
                <FaFacebookF className="fill-primary " />
              </li>
              <li>
                <FaTwitter className="fill-primary " />
              </li>
              <li>
                <FaInstagramSquare className="fill-primary " />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex justify-center mx-auto font-secondary text-sm mt-4 text-white-100 pb-12">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum impedit .
      </div>
    </footer>
  );
};

export default Footer;
