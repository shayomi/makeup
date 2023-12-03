import React from "react";
import { MdOutlineSearch } from "react-icons/md";

const Search = () => {
  return (
    <div className="">
      <div className="flex flex-row gap-x-4 items-center max-w-[800px] ">
        <input
          type="text"
          className=" h-[40px] rounded-[12px] border-[1px] border-black placeholder:items-center placeholder:px-4 placeholder:text-[11px] "
          placeholder="Search products"
        />
        <MdOutlineSearch size={25} />
      </div>
    </div>
  );
};

export default Search;
