/** @format */

import CartPage from "../pages/CartPage";
import HomePage from "../pages/HomePage";
import ProductDetailPage from "../pages/ProductDetailPage";
import SignInPage from "../pages/SignInPage";

export const routers = [
  {
    path: "/signIn",
    page: SignInPage,
  },

  {
    path: "/cart",
    page: CartPage,
    isShowNavBar: true,
  },

  {
    path: "/product/:id",
    page: ProductDetailPage,
    isShowNavBar: true,
  },

  {
    path: "/home",
    page: HomePage,
    isShowNavBar: true,
  },
];
