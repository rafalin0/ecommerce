import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import {
  CategoryPageContainer,
  CategoryName,
  CategoryItemsContainer,
} from "./CategoryStyled.jsx";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <CategoryPageContainer>
      <CategoryName>{category}</CategoryName>
      <CategoryItemsContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryItemsContainer>
    </CategoryPageContainer>
  );
}

export default Category;
