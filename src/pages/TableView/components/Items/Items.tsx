import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addToOrder, removeFromOrder } from "../../../../store/orders/actions";

interface Props {
  items: Items[];
  id: string;
  orderId: number | undefined;
}

interface Items {
  id: number;
  name: string;
  price: number;
  picture: string;
  createdAt: string;
  updatedAt: string;
  categoryId: number;
}

export default function Items(props: Props) {
  const [visability, setVisability] = useState(false);
  const { items, id, orderId } = props;
  const dispatch = useDispatch();

  return (
    <div className="itemDiv">
      <ul>
        {visability
          ? items.map((item) => (
              <div key={item.id} className="itemDiv">
                <li>
                  {item.name} price: {item.price}
                  <button
                    onClick={() =>
                      orderId
                        ? dispatch(removeFromOrder(orderId, item.id))
                        : null
                    }
                  >
                    -
                  </button>{" "}
                  <button
                    onClick={() =>
                      orderId ? dispatch(addToOrder(orderId, item.id)) : null
                    }
                  >
                    +
                  </button>
                </li>
              </div>
            ))
          : null}
        <button onClick={() => setVisability(!visability)}>
          {visability === false ? "Open" : "Close"}
        </button>
      </ul>
    </div>
  );
}
