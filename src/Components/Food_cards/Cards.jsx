import { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "../ContextReducer/ContextReducer";

const Cards = (props) => {
  let dispatch = useDispatchCart();
  let data = useCart();
  let options = props.options;
  let priceOptions = Object.keys(options);

  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");
  const priceRef = useRef();

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }

    if (food !== []) {
      if (food.size === size) {
        await dispatch({
          type: "UPDATE",
          id: props.foodItem._id,
          price: finalPrice,
          qty: qty,
        });
        return;
      } else if (food.size !== size) {
        await dispatch({
          type: "ADD",
          id: props.foodItem._id,
          name: props.foodItem.name,
          price: finalPrice,
          qty: qty,
          size: size,
        });
        return;
      }
      return;
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });
  };
  let finalPrice = 2 * qty * parseInt(options[size]);
  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <>
      <div>
        <div class="card mt-3" style={{ width: "18rem" }}>
          <div style={{ maxHeight: "250px", overflow: "hidden" }}>
            <img
              src={props.foodItem.img}
              class="card-img-top"
              alt="..."
              style={{ height: "200px", objectFit: "fill" }}
            />
          </div>
          <div class="card-body">
            <h5 class="card-title"> {props.foodItem.name} </h5>
            <div className="container w-100">
              <select
                className="m-2 h-100 bg-success rounded"
                style={{ color: "white" }}
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}{" "}
                    </option>
                  );
                })}
              </select>

              <select
                className="m-2 h-100 bg-success rounded"
                style={{ color: "white" }}
                onChange={(e) => setSize(e.target.value)}
                ref={priceRef}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {" "}
                      {data}{" "}
                    </option>
                  );
                })}
              </select>

              <div className="d-inline h-100 fs-5">Rs{finalPrice}/</div>
            </div>
            <hr />
            <button
              className="btn btn-success justify-center ms-2"
              onClick={handleAddToCart}
            >
              {" "}
              Add to Cart{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
