import { Route, Routes } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/CategoriesPreview.tsx";
import Category from "../category/Category.tsx";
import { fetchCategoriesStart } from "../../store/categories/categoryAction.ts";

function Catalogue() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesStart());
  }, [dispatch]);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
}

export default Catalogue;
