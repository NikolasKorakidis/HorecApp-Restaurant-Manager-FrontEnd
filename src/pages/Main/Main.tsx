import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchOrders } from "../../store/orders/actions";
import MainInterfaces from "../../components/NavigationBar/interfaces/MainInterfaces";
import { Link } from "react-router-dom";
import "./styles.css";

export default function Main() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOrders());
  }, []);

  return (
    <div>
      <h1>RestaurApp</h1>
      <div className="buttons">
        <Link to="/restaurant" style={{ textDecoration: "none" }}>
          <MainInterfaces
            image={
              "https://www.zilliondesigns.com/blog/wp-content/uploads/restaurant-menus.jpg"
            }
            title={"restaurant"}
            path={"restaurant"}
            disc={"Restaurant Overview"}
          />
        </Link>
        <Link to="orders" style={{ textDecoration: "none" }}>
          <MainInterfaces
            image={
              "https://digitalrestro.files.wordpress.com/2014/07/restaurant-graphics.jpg"
            }
            title={"restaurant"}
            path={"orders"}
            disc={"Active Orders"}
          />
        </Link>
        <Link to="menu" style={{ textDecoration: "none" }}>
          <MainInterfaces
            image={
              "https://image.freepik.com/free-vector/elegant-restaurant-menu_23-2147492923.jpg"
            }
            title={"menu"}
            path={"menu"}
            disc={"Menu"}
          />
        </Link>
        <MainInterfaces
          image={
            "https://cdn.thinglink.me/api/image/783748870432620544/1240/10/scaletowidth"
          }
          title={"manager"}
          path={"manager"}
          disc={"Manager's View"}
        />

        <MainInterfaces
          image={
            "https://id10.co.uk/wp-content/uploads/2015/04/web-design-tools.jpg"
          }
          title={"options"}
          path={"options"}
          disc={"Options"}
        />
      </div>
    </div>
  );
}
