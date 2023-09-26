import { Link } from "react-router-dom";

import ViewMoreButton from "../button/ViewMoreButton";
import ProductCard from "../product-card/ProductCard";

import {
  CategoryPreviewContainer,
  ProductCardsContainer,
  CategoryName,
} from "./CategoryPreviewStyled.jsx";

function CategoryPreview({ title, products }) {
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
