/** @format */

import { IoCartOutline, IoSearch } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import "../assets/styles/components/NavbarComponent.scss";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const NavbarComponent = () => {
  const user = JSON.parse(localStorage.getItem("User") || "{}");
  const numberProduct = useSelector(
    (state: RootState) => state.products.numberProduct
  );
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("User");
    navigate("/signIn");
  };

  const handleCart = () => {
    navigate("/cart");
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
          <input type='text' placeholder='Search' />
          <button className='btnSearch'>
            <IoSearch title='Search' />
          </button>
        </div>

        <div className='cart'>
          <IoCartOutline title='Cart' onClick={handleCart} />
          {numberProduct === 0 ? (
            ""
          ) : (
            <span className='numbarCart'>{numberProduct}</span>
          )}
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
