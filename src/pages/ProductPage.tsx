/** @format */

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getAllProduct } from "../features/products/productSlice";
import "../assets/styles/pages/ProductPage.scss";

const ProductPage: React.FC = () => {
  const listProducts = useSelector(
    (state: RootState) => state.products.listProduct
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(getAllProduct());
  });
  return (
    <div className='productPage'>
      <div className='productBody'>
        {listProducts.map((product: any) => {
          return (
            <div className='cardProduct' key={product.id}>
              <div className='imageProduct'>
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className='cardBody'>
                <span className='title'>{product.title}</span>
                <span className='price'>
                  <strong>$</strong> {product.price}
                </span>
              </div>
              <div className='cardFooter'>
                <button className="detailProduct">Detail</button>
                <button className="addCart">Add Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPage;
