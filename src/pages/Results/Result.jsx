import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import classes from "./Results.module.css";
import { useParams } from "react-router-dom"; // Ensure react-router-dom is installed
import axios from "axios";
import { productUrl } from "../../Api/endPoins";
import ProductCard from "../../components/product/ProductCard";

function Result() {
  const [results, setResults] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
      })
      .catch((err) => {
        console.error("Error fetching results:", err); // Improved error handling
        // Optionally display an error message to the user
      });
  }, [categoryName]); // Dependency array for useEffect

  return (
    <Layout>
      <section>
        <h1 style={{ padding: "30px" }}>Result</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        <div className={classes.products_container}>
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default Result;


