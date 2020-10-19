import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCategories } from "../../../../store/categories/actions";
import { selectCategories } from "../../../../store/categories/selectors";

export default function Categories() {
  const [visability, setVisability] = useState(false);
  const categories = useSelector(selectCategories);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);
  return (
    <div>
      {categories?.map((category) => (
        <div className="cetegoryDiv" key={category.id}>
          <h2>{category.name}</h2>
          <ul>
            {visability
              ? category.items.map((item) => (
                  <div key={item.id} className="itemDiv">
                    <li>
                      {item.name} price: {item.price} <button>-</button>{" "}
                      <button>+</button>
                    </li>
                  </div>
                ))
              : null}
            <button onClick={() => setVisability(!visability)}>
              {visability === false ? "Open" : "Close"}
            </button>
          </ul>
        </div>
      ))}
    </div>
  );
}
