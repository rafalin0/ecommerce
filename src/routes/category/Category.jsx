import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categorySelector";

import ProductCard from "../../components/product-card/ProductCard";
import Spinner from "../../components/spinner/Spinner";

import { Banner, PageTitle } from "../../styles/Global";
import { CategoryItemsContainer } from "./CategoryStyled.jsx";

function Category() {
  const { category } = useParams();
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <Banner>
        <PageTitle>{category}</PageTitle>
      </Banner>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryItemsContainer>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </CategoryItemsContainer>
      )}
    </>
  );
}

export default Category;
