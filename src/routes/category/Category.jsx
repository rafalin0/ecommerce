import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-card/ProductCard";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import { Banner, PageTitle } from "../../styles/Global";
import { CategoryItemsContainer } from "./CategoryStyled.jsx";

function Category() {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);
  return (
    <>
      <Banner>
        <PageTitle>{category}</PageTitle>
      </Banner>

      <CategoryItemsContainer>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryItemsContainer>
    </>
  );
}

export default Category;
