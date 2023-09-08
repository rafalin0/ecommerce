import { useContext } from "react";

import { CategoriesContext } from "../../contexts/CategoriesContext";

import CategoryPreview from "../../components/category-preview/CategoryPreview";

import { CategoriesPreviewContainer } from "./CategoriesPreviewsStyled.jsx";

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <CategoriesPreviewContainer>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </CategoriesPreviewContainer>
  );
}

export default CategoriesPreview;
