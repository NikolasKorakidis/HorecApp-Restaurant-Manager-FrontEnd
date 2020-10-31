import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCategories } from "../../store/categories/selectors";
import { fetchCategories } from "../../store/categories/actions";

export default function Menu() {
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div>
      <h1>Menu</h1>
      {categories?.map((category) => (
        <div className="menu-main-div">
          <div key={category.id}>
            <h2>{category.name}</h2>
            <ul>
              {category.items.map((item) => (
                <div key={item.id}>
                  <h3>
                    {item.name} price: {item.price}
                  </h3>
                  <img
                    style={{ width: "10%", height: "10%" }}
                    src={item.picture}
                  ></img>
                </div>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}
