import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../store/categories/actions";
import { selectCategories } from "../../../../store/categories/selectors";
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
      {categories?.map((category) => (
        <div className="categoryDiv" key={category.id}>
          <h2>{category.name}</h2>
          <Items items={category.items} id={id} orderId={orderId} />
        </div>
      ))}
    </div>
  );
}
