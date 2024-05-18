// import React, { useEffect, useState } from "react";
// import Layout from "../../components/Layout/Layout";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import { productUrl } from "../../Api/endPoins";
// import ProductCard from "../../components/product/ProductCard";
// import Loader from "../../components/Loader/Loader";
// function ProductDetail() {
//   const { productId } = useParams();
//   const [product, setproduct] = useState({});
//   const [isLoading, setIsLoading] = useState(false);
//   useEffect(() => {
//     axios
//       .get(`${productUrl}/products/${productId}`)
//       .then((res) => {
//         setproduct(res.data);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, [productId]);
//   return (
//     <Layout>
//       <ProductCard product={product} />
//     </Layout>
//   );
// }

// export default ProductDetail;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { productUrl } from "../../Api/endPoins";
import ProductCard from "../../components/product/ProductCard";
import Loader from "../../components/Loader/Loader";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${productUrl}/products/${productId}`)
      .then((res) => {
        setProduct(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);
  return (
    <Layout>
      {isLoading ? (
        <Loader />
      ) : (
        <ProductCard
          product={product}
          flex={true}
          renderDesc={true}
          renderAdd={true}
          //needAddButton={true}
        />
      )}
    </Layout>
  );
}

export default ProductDetail;
