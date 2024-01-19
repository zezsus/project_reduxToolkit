/** @format */

import { useDispatch } from "react-redux";
import "../assets/styles/pages/HomePage.scss";
import { useEffect } from "react";
import { getAllUser } from "../features/users/userSlice";
import { AppDispatch } from "../store";
import ProductPage from "./ProductPage";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>(); 

  useEffect(() => {
    dispatch(getAllUser());
  }, [dispatch]);

  return (
    <div className='homePage'>
      <div className='homeBody'>
        <ProductPage />
      </div>
      <div className='homeFooter'></div>
    </div>
  );
};

export default HomePage;
