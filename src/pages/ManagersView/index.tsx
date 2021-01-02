import React from "react";
import "./styles.css";

export default function index() {
  return (
    <div className="main-manager-div">
      <div className="earnings">
        <h1 className="header">Daily Report</h1>
        <p>Daily Total: 3056 €</p>
        <p>Items Sold: 798</p>
        <p>Tables Served: 44</p>
        <p>Open Orders: 2</p>
        <p>Open Orders amount: 156 €</p>
        <button
          onClick={() =>
            alert("Daily Report is Saved and Send to : manager@horecapp.com")
          }
        >
          Save and Send
        </button>
      </div>
      <div className="orders">
        <h1 className="header">Daily Consumption</h1>
        {data.map((item) => (
          <p>
            {" "}
            {item.item} : {item.units}
          </p>
        ))}
        <button
          onClick={() => alert("Your Order has been Successfully placed")}
        >
          Make an Order
        </button>
      </div>
    </div>
  );
}

const data = [
  {
    item: "Coca Cola",
    units: 15,
  },
  {
    item: "Lagunitas IPA",
    units: 75,
  },
  {
    item: "Heineken",
    units: 123,
  },
  {
    item: "Fanta",
    units: 45,
  },
  {
    item: "Bacardi",
    units: 5,
  },
  {
    item: "Apple Pie",
    units: 11,
  },
  {
    item: "Margarita",
    units: 1,
  },
  {
    item: "Verdejo",
    units: 115,
  },
  {
    item: "Cabernet Sauvignon",
    units: 42,
  },
  {
    item: "Sprite",
    units: 35,
  },
  {
    item: "Haig",
    units: 37,
  },
];
