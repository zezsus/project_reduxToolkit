/** @format */

import { IoCartOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import "../assets/styles/components/NavbarComponent.scss";
import { Link, useNavigate } from "react-router-dom";

const NavbarComponent = () => {
  const user = JSON.parse(localStorage.getItem("User") || "{}");
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
        <Link to='/'>
          <h2>MyWeb</h2>
        </Link>
      </div>
      <div className='navBody'>
        <input type='text' placeholder='Search' />
        <IoCartOutline title='Cart' onClick={handleCart} />
      </div>
      <div className='navFooter'>
        <span>{user.lastName}</span>
        <IoIosLogOut title='SignOut' onClick={handleSignOut} />
      </div>
    </div>
  );
};

export default NavbarComponent;
