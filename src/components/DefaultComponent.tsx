/** @format */

import NavbarComponent from "./NavbarComponent";

const DefaultComponent = ({ children }: any) => {
  return (
    <div>
      <div style={{ backgroundColor: "orange" }}>
        <NavbarComponent />
      </div>
      {children}
    </div>
  );
};

export default DefaultComponent;
