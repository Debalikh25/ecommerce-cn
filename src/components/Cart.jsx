import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/reducers/cartReducer";
import { cartSelector } from "../redux/reducers/cartReducer";
import "../cart.css";

const Cart = () => {
  const cartItems = useSelector(cartSelector).cart;
  const dispatch = useDispatch();

  const [total, setTotal] = useState();

  useEffect(() => {
      let temp = 0;
      cartItems.forEach((item) => {
         temp += parseInt(item.price)
      })
      setTotal(temp);
  }, [total , cartItems]);

  return (
    <>
      <div className="shopping-cart">
        <div className="title">
          {cartItems.length > 0 ? "Cart" : "Cart is empty"}
        </div>

        {cartItems.length > 0 ? (
          <>
            {cartItems.map((item, index) => (
              <div className="item" key={index}>
                <div className="buttons">
                  <span className="like-btn"></span>
                </div>

                <div className="cart-item-image">
                  <img
                    src={item.image}
                    className="cart-item-image"
                    alt={item.image}
                  />
                </div>

                <div className="description">
                  <span>{item.name}</span>
                </div>

                <div className="quantity">
                  <button
                    onClick={() => {
                      dispatch(cartActions.increment(item))
                      setTotal(total + parseInt(item.price))
                    }}
                    className="plus-btn"
                    type="button"
                    name="button"
                  >
                    +
                  </button>
                  <input type="text" name="name" value={item.qty} />
                  <button
                    onClick={() => {
                      if (item.qty == 1) {
                        dispatch(cartActions.removeFromCart(index));
                        setTotal(total - parseInt(item.price))
                      } else {
                        dispatch(cartActions.decrement(item));
                        setTotal(total - parseInt(item.price))
                      }
                    }}
                    className="minus-btn"
                    type="button"
                    name="button"
                  >
                    -
                  </button>
                </div>
                <button
                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                  onClick={() => {
                    dispatch(cartActions.removeFromCart(index));
                  }}
                >
                  Delete
                </button>
                <div className="total-price">₹ {item.qty * item.price}</div>
              </div>
            ))}
          </>
        ) : null}
      </div>
      {cartItems.length > 0 ? (
        <h3 className="title">Cart Total : ₹ {total}</h3>
      ) : null}
    </>
  );
};

export default Cart;
