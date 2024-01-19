/** @format */

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routers } from "./routers/index";
import { Fragment } from "react";
import DefaultComponent from "./components/DefaultComponent";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
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
    </div>
  );
}

export default App;
