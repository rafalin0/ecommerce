import { Link } from "react-router-dom";

import ViewMoreButton from "../button/ViewMoreButton";
import ProductCard from "../product-card/ProductCard";

import "./category-preview.scss";

function CategoryPreview({ title, products }) {
  return (
    <>
      <h2 className="category-title">
        <Link to={title}>{title.toUpperCase()}</Link>
      </h2>
      <div className="category-preview">
        <div className="cp-product-cards-container">
          {products
            .filter((_, idx) => idx < 4)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <div className="cp-view-more-btn">
          <Link to={title}>
            <ViewMoreButton />
          </Link>
        </div>
      </div>
    </>
  );
}

export default CategoryPreview;
