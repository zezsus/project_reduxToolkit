/** @format */

import { IoCartOutline, IoSearch } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import "../assets/styles/components/NavbarComponent.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";
import { searchProduct } from "../features/products/productSlice";

const NavbarComponent = () => {
  const user = JSON.parse(localStorage.getItem("User") || "");
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleSignOut = () => {
    localStorage.removeItem("User");
    navigate("/signIn");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const handleSearch = (searchItem: string) => {
    dispatch(searchProduct(searchItem));
  };

  return (
    <div className='navbarComponent'>
      <div className='navHeader'>
        <Link to='/home'>
          <h2>MyWeb</h2>
        </Link>
      </div>
      <div className='navBody'>
        <div className='srarch'>
          <input
            type='text'
            placeholder='Search'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className='btnSearch'>
            <IoSearch
              title='Search'
              onClick={() => handleSearch(searchValue)}
            />
          </button>
        </div>

        <div className='cart'>
          <IoCartOutline title='Cart' onClick={handleCart} />
        </div>
      </div>

      <div className='navFooter'>
        <span>{user.lastName}</span>
        <IoIosLogOut title='SignOut' onClick={handleSignOut} />
      </div>
    </div>
  );
};

export default NavbarComponent;
