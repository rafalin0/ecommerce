import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import {
  selectCategoriesIsLoading,
  selectCategoriesMap,
} from "../../store/categories/categorySelector.ts";

import ProductCard from "../../components/product-card/ProductCard.tsx";
import Spinner from "../../components/spinner/Spinner.tsx";

import { Banner, PageTitle } from "../../styles/Global";
import { CategoryItemsContainer } from "./CategoryStyled.tsx";

type CategoryRouteParams = {
  category: string;
}

function Category() {
  const { category } = useParams<keyof CategoryRouteParams>() as CategoryRouteParams;
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
