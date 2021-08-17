import React from "react";
import Icons from "../../common/Icons";

const SingleItem = ({outline}) => {
  return (
    <li className="w-100">
      <div
        className="nav-link border-bottom"
      >
        {/* <Link
          href="/"
          replace
        > */}
          <div style={{ cursor: "pointer" }}>
            <p className="m-0">
              <Icons
                icon="play"
                className="mr-2"
              />
              {outline.title}
            </p>
            <small className="text-muted">
              {outline.content}
            </small>
          </div>
        {/* </Link> */}
      </div>
    </li>
  );
};

export default SingleItem;
