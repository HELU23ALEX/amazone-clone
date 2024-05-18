

import React from "react";
import { categoryInfos } from "./CategoryFullInfo"
import CategoryCard from "./CategoryCard";
import classes from "./category.module.css";

function Category() {
  return (
    <section className={classes.category_container}>
      {categoryInfos.map((infos, index) => (
        <CategoryCard key={infos.id || index} data={infos} /> // Use `infos.id` if available, otherwise fallback to index
      ))}
    </section>
  );
}
export default Category;


