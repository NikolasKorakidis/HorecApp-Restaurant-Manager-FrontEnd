import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../store/categories/actions";
import { selectCategories } from "../../../../store/categories/selectors";
import CategoriesLayout from "../../../../components/CategoriesLayout";
import Items from "../Items/Items";

interface Props {
  id: string;
  orderId: number | undefined;
}

export default function Categories(props: Props) {
  const { id, orderId } = props;
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <h1>Categories</h1>
      <p>Click to expand</p>
      <CategoriesLayout orderId={orderId} categories={categories} />
    </div>
  );
}
