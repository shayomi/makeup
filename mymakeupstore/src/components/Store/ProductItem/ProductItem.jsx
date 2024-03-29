import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdOutlineSearch } from "react-icons/md";
import Loader from "../../../Loader";
import placeholder from "../../../assets/img/store/placeholder.png";

import { NavLink } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const ProductFilter = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [selectedPriceRange, setSelectedPriceRange] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24;

  useEffect(() => {
    // Fetch all products
    setLoading(true);
    axios
      .get("http://makeup-api.herokuapp.com/api/v1/products.json")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    // Update filtered products when filters or search term change
    filterProducts(selectedBrand, selectedType, selectedPriceRange, searchTerm);
  }, [
    selectedBrand,
    selectedType,
    selectedPriceRange,
    searchTerm,
    currentPage,
  ]);

  const handleBrandChange = (brand) => {
    setSelectedBrand(brand);
    setCurrentPage(1);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range) => {
    setSelectedPriceRange(range);
    setCurrentPage(1);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const filterProducts = (brand, type, range, term) => {
    let filtered = products;

    if (brand !== "all") {
      filtered = filtered.filter((product) => product.brand === brand);
    }

    if (type !== "all") {
      filtered = filtered.filter((product) => product.product_type === type);
    }

    if (range !== "all") {
      const [min, max] = range.split("-");
      filtered = filtered.filter(
        (product) =>
          product.price >= parseFloat(min) && product.price <= parseFloat(max)
      );
    }

    if (term && typeof term === "string" && term.trim() !== "") {
      // Ensure term is a non-empty string before performing operations
      filtered = filtered.filter(
        (product) =>
          (product.name &&
            product.name.toLowerCase().includes(term.toLowerCase())) ||
          (product.brand &&
            product.brand.toLowerCase().includes(term.toLowerCase()))
      );
    }

    // Set filtered products
    setFilteredProducts(filtered);
  };

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  // Calculate the range of products to display on the current page
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = Math.min(
    startIndex + productsPerPage,
    filteredProducts.length
  );
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  // Helper function to generate an array of page numbers to display
  const getPageNumbers = () => {
    const totalPagesArray = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    const MAX_PAGE_BUTTONS = 5; // Maximum number of page buttons to display
    if (totalPages <= MAX_PAGE_BUTTONS) {
      return totalPagesArray;
    }

    const visiblePageNumbers = [];
    const midPoint = Math.ceil(MAX_PAGE_BUTTONS / 2);

    if (currentPage <= midPoint) {
      visiblePageNumbers.push(...totalPagesArray.slice(0, MAX_PAGE_BUTTONS));
    } else if (currentPage > totalPages - midPoint) {
      visiblePageNumbers.push(
        ...totalPagesArray.slice(totalPages - MAX_PAGE_BUTTONS, totalPages)
      );
    } else {
      const start = currentPage - midPoint;
      const end = currentPage + midPoint - 1;
      visiblePageNumbers.push(...totalPagesArray.slice(start - 1, end));
    }

    return visiblePageNumbers;
  };

  const Loading = () => {
    return (
      <>
        <div className="flex flex-col w-full mt-24 items-center justify-center">
          <Loader />
          <p className="font-primary text-dark text-sm font-medium pt-4">
            Loading ...
          </p>
        </div>
      </>
    );
  };

  return (
    <div className="mt-10 mb-24">
      <div className="">
        <div className="flex flex-col border-b-[1px] border-slate-300 pb-6 gap-y-4  ">
          <div className="flex flex-row items-center">
            {/* <label className="mr-2 font-secondary font-medium text-sm  lg:text-md">
              Products:
            </label> */}

            <Swiper
              className=""
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              breakpoints={{
                360: { width: 360, slidesPerView: 3 },
                768: { width: 768, slidesPerView: 5 },
                1024: { width: 1024, slidesPerView: 9 },
                1200: { width: 1200, slidesPerView: 9 },
              }}
              spaceBetween={2}
              navigation
              // pagination={{ clickable: true }}
              // scrollbar={{ draggable: true }}
            >
              <div className="flex items-center ">
                <div className="flex flex-row gap-x-2">
                  {Array.from(
                    new Set(products.map((product) => product.product_type))
                  ).map((type) => (
                    <SwiperSlide>
                      <button
                        key={type}
                        onClick={() => handleTypeChange(type)}
                        className={`${
                          selectedType === type
                            ? "bg-[#ffd470] text-dark"
                            : "bg-transparent text-[11px] text-slate-600"
                        } border-[1px] border-slate-400 rounded-[8px] py-2 px-4 text-sm font-primary mx-2 focus:outline-none`}
                      >
                        {type}
                      </button>
                    </SwiperSlide>
                  ))}
                </div>
              </div>
            </Swiper>
          </div>
          <div className="flex flex-col gap-y-2  md:flex-row justify-start items-center gap-x-6">
            <div className="flex items-center mt-4 px-2">
              <label className="mr-2">Search:</label>
              <div className="border-b-[1px] border-slate-900">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  placeholder="Search products"
                  className=" w-[300px] text-[11px] font-primary font-normal  border-b-[1px] border-slate-400 rounded-[8px] py-2 px-4 h-[38px]"
                />
              </div>
            </div>

            <div className="flex  items-center mt-4 px-2">
              <label className="mr-2 font-secondary font-medium text-sm lg:text-md">
                {" "}
                Brands:
              </label>
              <select
                onChange={(e) => handleBrandChange(e.target.value)}
                value={selectedBrand}
                className=" border-[1px] border-slate-400 rounded-[8px] py-2 px-4 text-sm font-primary max-w-[300px]"
              >
                <option value="all">All</option>
                {Array.from(
                  new Set(products.map((product) => product.brand))
                ).map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center mt-4 px-2">
              <label className="mr-2 font-secondary font-medium text-sm lg:text-md">
                Price:
              </label>
              <select
                onChange={(e) => handlePriceRangeChange(e.target.value)}
                value={selectedPriceRange}
                className=" border-[1px] border-slate-400 rounded-[8px] py-2 px-4 text-sm font-primary "
              >
                <option value="all">All </option>
                <option value="0-10">$0 - $10</option>
                <option value="10-20">$10 - $20</option>
                <option value="20-30">$20 - $30</option>
              </select>
            </div>
          </div>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 mt-12 gap-y-4 ">
            {currentProducts.map((product) => (
              <div
                key={product.id}
                className="px-6 py-6 hover:shadow-xl ease-in-out duration-500 transition-all cursor-pointer"
              >
                <NavLink to={`/${product.id}`}>
                  <div className="flex flex-col gap-y-4 justify-center ">
                    <div className="max-w-[100px] mx-auto h-[120px]">
                      <img
                        src={product.image_link}
                        onError={(e) => {
                          e.target.src = placeholder; // Replace with placeholder image
                          e.target.onerror = null; // Prevent infinite loop if placeholder image fails to load
                        }}
                        alt="Product"
                        className="w-[80%] justify-center mx-auto mix-blend-multiply"
                      />
                    </div>
                    <h2 className="text-sm font-primary font-medium text-dark">
                      {product.name.substring(0, 80) + " " + "..."}
                    </h2>
                    <div className="flex flex-col gap-y-3 justify-center md:flex-row md:justify-between items-center">
                      <h2 className="text-sm font-secondary font-semibold text-dark text-center md:text-start">
                        $ {product.price}
                      </h2>
                      <button className="rounded-[12px] bg-[#ffd470] px-4 text-[12px] py-2 text-dark  font-primary font-medium tracking-[0.02em] outline-none hover:bg-[#b39140] transition-all duration-300 flex justify-center items-center ;">
                        Shop now
                      </button>
                    </div>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-center mt-8">
          <nav className="pagination flex flex-row gap-x-4">
            <button
              className="btn-primary"
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {getPageNumbers().map((pageNum) => (
              <button
                key={pageNum}
                onClick={() => setCurrentPage(pageNum)}
                className={currentPage === pageNum ? "active" : ""}
              >
                {pageNum}
              </button>
            ))}
            <button
              className="btn-primary"
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductFilter;
