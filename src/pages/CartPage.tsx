/** @format */

import { MdDeleteForever } from "react-icons/md";
import "../assets/styles/pages/CartPage.scss";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { useEffect } from "react";
import { getCartItem } from "../features/products/productSlice";

const CartPage = () => {
  const { id } = useParams();
  const cartItem = useSelector((state: RootState) => state.products.listCart);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(getCartItem());
  }, []);

  console.log("item", cartItem);

  return (
    <div className='cartPage'>
      <div className='cartContent'>
        <Link to={`/product/${id}`}>
          <img src={cartItem.thumbnail} alt={cartItem.title} />
        </Link>
        <Link to={`/product/${id}`}>
          <span className='text'>{cartItem.title}</span>
        </Link>
        <Link to={`/product/${id}`}>
          <span className='text'>$ {cartItem.price}</span>
        </Link>
        <div className='button'>
          <MdDeleteForever />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
