/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routers } from "./routers/index";
import { Fragment } from "react";
import DefaultComponent from "./components/DefaultComponent";
import { ToastContainer } from "react-toastify";
import SignInPage from "./pages/SignInPage";
import HomePage from "./pages/HomePage";

function App() {
  let isSingIn;
  if (localStorage.getItem("User")) {
    isSingIn = true;
  } else {
    isSingIn = false;
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={
              isSingIn ? (
                <DefaultComponent>
                  <HomePage />
                </DefaultComponent>
              ) : (
                <SignInPage />
              )
            }
          />
          {routers.map((route) => {
            const Page = route.page;
            const NavBar = route.isShowNavBar ? DefaultComponent : Fragment;
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <NavBar>
                    <Page />
                  </NavBar>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>

      <ToastContainer
        position='top-center'
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='colored'
      />
    </div>
  );
}

export default App;
