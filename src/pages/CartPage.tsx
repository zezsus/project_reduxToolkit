/** @format */

import { MdDeleteForever } from "react-icons/md";
import "../assets/styles/pages/CartPage.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { removeToCart } from "../features/products/productSlice";

const CartPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const listItemCart = useSelector(
    (state: RootState) => state.products.listCart
  );

  const handleRemoveFromCart = (item: any) => {
    dispatch(removeToCart(item));
  };

  if (!listItemCart) {
    return (
      <div style={{ padding: "1rem", textAlign: "center", fontSize: "2rem" }}>
        CartPage not found.
      </div>
    );
  }

  return (
    <div className='cartPage'>
      {listItemCart.map((item: any, index: number) => {
        return (
          <div className='cartContent' key={index}>
            <img src={item.thumbnail} alt={item.title} />
            <span className='text'>{item.title}</span>
            <span className='text'>$ {item.price}</span>
            <div className='button'>
              <MdDeleteForever onClick={() => handleRemoveFromCart(item)} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartPage;
