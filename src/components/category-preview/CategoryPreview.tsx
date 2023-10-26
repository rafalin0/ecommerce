import React from "react"
import { Link } from "react-router-dom";

import ViewMoreButton from "../button/ViewMoreButton.tsx";
import ProductCard from "../product-card/ProductCard.tsx";

import {
  CategoryPreviewContainer,
  ProductCardsContainer,
  CategoryName,
} from "./CategoryPreviewStyled.tsx";

import { CategoryItem } from "../../store/categories/categoryTypes.ts";

type CategoryPreviewProps = {
  title: string;
  products: CategoryItem[];
};

const CategoryPreview: React.FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <CategoryName to={title}>{title}</CategoryName>

      <Link to={title}>
        <ViewMoreButton />
      </Link>

      <ProductCardsContainer>
        {products
          .filter((_, idx) => idx < 5)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </ProductCardsContainer>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
