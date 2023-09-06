import { useContext } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import CategoryPreview from "../category-preview/CategoryPreview";

import "./categories-preview.scss";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <div className="shop-container">
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </div>
  );
}

export default CategoriesPreview;
