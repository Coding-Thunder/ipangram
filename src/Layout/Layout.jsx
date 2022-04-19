import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <div className="bg-black text-white p-5 mb-5">Header</div>
      <div className="flex justify-center">{children}</div>
      <div className="bg-black text-white p-5 mt-5">Footer</div>
    </div>
  );
};

export default Layout;
