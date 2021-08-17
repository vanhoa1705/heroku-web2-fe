import React from "react";
import Icons from "../../common/Icons";

const SingleSeparator = ({ title, active, onClick }) => (
  <div
    className="p-3 border-bottom d-flex bg-light"
    onClick={onClick}
    style={{
      cursor: "pointer",
    }}
  >
    <span className="">
      <strong>{title}</strong>
    </span>
    <Icons
      icon={active ? "angleUp" : "angleDown"}
      className={"ml-auto"}
      style={{
        fontSize: "x-large",
      }}
    />
  </div>
);

export default SingleSeparator;
