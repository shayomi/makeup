import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

const ProductItem = () => {
  useEffect(() => {
    const { product_type } = useParams();

    const [product, setProduct] = useState([]);

    const getProducts = async () => {
      const result = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products/${product_type}.json`
      );

      const allProducts = result.data.entries;
      const productTypes = allProducts.filter(
        (product) => product.Category === product_type
      );
      console.log(productTypes);
    };
    getProducts();
  }, [product_type]);

  return (
    <div className="item__wrapper">
      {/* {items.map((item) => (
       <div class="ui card" key={item.API}>
         <div class="content">
           <div class="header">{item.API}</div>
         </div>
         <div class="content">
           <p>{item.Description}</p>
           <span>Category: {item.Category}</span>
         </div>
         <div class="extra content">
           <button class="ui button">Show More</button>
         </div>
       </div>
     ))} */}
    </div>
  );
};

export default ProductItem;
