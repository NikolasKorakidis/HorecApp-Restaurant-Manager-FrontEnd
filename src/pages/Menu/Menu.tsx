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

  console.log(categories);

  return (
    <div>
      <h1>Menu</h1>
      <img
        src="https://www.forketers.com/wp-content/uploads/2017/10/how-design-menu.jpg"
        alt="menu"
      />
      {/* {categories?.map((category) => (
        <div className="menu-main-div">
          <div key={category.id}>
            <h2 style={styles.title}>{category.name}</h2>
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
      ))} */}
    </div>
  );
}

const styles = {
  title: {
    background: "lightblue",
    width: "50%",
    margin: "auto",
  },
};
