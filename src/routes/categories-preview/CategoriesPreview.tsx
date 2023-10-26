import { useSelector } from "react-redux";

import { selectCategoriesMap } from "../../store/categories/categorySelector.ts";

import CategoryPreview from "../../components/category-preview/CategoryPreview.tsx";

import { CategoriesPreviewContainer } from "./CategoriesPreviewsStyled.tsx";

function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

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
