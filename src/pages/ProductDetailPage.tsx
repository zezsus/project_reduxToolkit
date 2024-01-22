/** @format */

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { addToCart } from "../features/products/productSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import "../assets/styles/pages/ProductDetailPage.scss";
import { toast } from "react-toastify";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const listProducts = useSelector(
    (state: RootState) => state.products.listProduct
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(addToCart(product));
  }, [dispatch]);

  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!id) {
    return <div>Invalid ID. Please provide a valid ID.</div>;
  }
  const productId = parseInt(id);

  const product = listProducts.find((product: any) => product.id === productId);

  if (!product) {
    return (
      <div style={{ padding: "1rem", textAlign: "center", fontSize: "2rem" }}>
        Product not found.
      </div>
    );
  }

  const listImages = product.images;

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    toast.success("Add to cart successfully");
  };

  return (
    <div className='productDetailPage'>
      <div className='productDetaulHeader'>
        <IoMdArrowRoundBack onClick={() => navigate("/home")} />
      </div>
      <div className='productDetailBody'>
        <div className='productDetailLeft'>
          <div className='currentImage'>
            <img
              src={listImages[currentImageIndex]}
              alt={product.title}
              className='image'
            />
          </div>
          <div className='listImage'>
            {listImages.map((image: any, index: number) => {
              return (
                <img
                  src={image}
                  alt={image}
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                />
              );
            })}
          </div>
        </div>
        <div className='productDetailRight'>
          <div className='productDetailLeftHeader'>
            <h2 className='title'>{product.title}</h2>
            <span className='description'>{product.description}</span>
            <span className='price'>$ {product.price}</span>
            <span className='rating'>
              <FaStar />
              {product.rating}
            </span>
          </div>
          <div className='productDetailLeftFooter'>
            <button className='btnBuy'>Buy Now</button>
            <button className='btnAddToCart' onClick={handleAddToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
