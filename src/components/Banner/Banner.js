import React from "react";

function Banner({ status, children }) {
  return (
    <div className={status}>
      {children}
    </div>
  );
}

export default Banner;
