import { Link } from "react-router-dom";

import ViewMoreButton from "../button/ViewMoreButton";
import ProductCard from "../product-card/ProductCard";

import {
  CategoryPreviewContainer,
  PreviewContent,
  ProductCardsContainer,
  CategoryName,
} from "./CategoryPreviewStyled.jsx";

function CategoryPreview({ title, products }) {
  return (
    <CategoryPreviewContainer>
      <CategoryName to={title}>{title}</CategoryName>
      <PreviewContent>
        <ProductCardsContainer>
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ProductCardsContainer>
        <div className="cp-view-more-btn">
          <Link to={title}>
            <ViewMoreButton />
          </Link>
        </div>
      </PreviewContent>
    </CategoryPreviewContainer>
  );
}

export default CategoryPreview;
