import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { links } from "./MyLinks";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useParams } from "react-router-dom";

const Topbar = () => {
  const { product_type } = useParams();

  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <div className="w-[95%] mx-auto mt-0 mb-24">
      <div className="flex flex-row justify-evenly">
        {links.map((link) => (
          <div className=" ">
            <div className=" md:cursor-pointer hover:bg-primary group rounded-[12px] transition-all duration-500 ease-in  ">
              <NavLink to={`/store/${product_type}`}>
                <h1
                  className="py-1 px-2 text-[11px] font-primary flex flex-row justify-between items-center "
                  onClick={() => {
                    heading !== link.name
                      ? setHeading(link.name)
                      : setHeading("");
                    setSubHeading("");
                  }}
                >
                  {link.name}
                  <span className="text-xl md:hidden inline">
                    <IoMdArrowDropdown
                      size={25}
                      name={`${
                        heading === link.name ? "chevron-up" : "chevron-down"
                      }`}
                    />
                  </span>
                  <span className="text-[11px]  md:block hidden hover:rotate-180 ">
                    <IoMdArrowDropdown name="chevron-down" size={25} />
                  </span>
                </h1>
              </NavLink>
              {link.submenu && (
                <div>
                  <div className="absolute top-[27rem] hidden group-hover:md:block hover:md:block">
                    {/* <div className="py-3">
                      <div className="w-4 h-4 left-3 relative mt-1 bg-white rotate-45"></div>
                    </div> */}
                    <div className="bg-white p-5 flex flex-col gap-10">
                      {link.sublinks.map((mysublinks) => (
                        <div>
                          <h1 className="text-lg font-semibold text-dark">
                            {mysublinks.Head}
                          </h1>
                          {mysublinks.sublink.map((slink) => (
                            <li className="text-sm text-gray-600 my-2.5">
                              <NavLink
                                to={slink.link}
                                className="hover:text-primary"
                              >
                                {slink.name}
                              </NavLink>
                            </li>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Mobile menus */}
            <div
              className={`
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
            >
              {/* sublinks */}
              {link.sublinks.map((slinks) => (
                <div>
                  <div>
                    <h1
                      onClick={() =>
                        subHeading !== slinks.Head
                          ? setSubHeading(slinks.Head)
                          : setSubHeading("")
                      }
                      className="py-4 pl-7 font-semibold md:pr-0 pr-5 flex justify-between items-center"
                    >
                      {slinks.Head}

                      <span className="text-xl md:mt-1 md:ml-2 inline">
                        <ion-icon
                          name={`${
                            subHeading === slinks.Head
                              ? "chevron-up"
                              : "chevron-down"
                          }`}
                        ></ion-icon>
                      </span>
                    </h1>
                    <div
                      className={`${
                        subHeading === slinks.Head ? "md:hidden" : "hidden"
                      }`}
                    >
                      {slinks.sublink.map((slink) => (
                        <li className="py-3 pl-14">
                          <NavLink to={slink.link}>{slink.name}</NavLink>
                        </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
