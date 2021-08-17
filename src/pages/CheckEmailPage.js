import React from "react";
import CheckEmail from "../components/User/CheckEmail/CheckEmail";

function CheckEmailPage(props) {
  document.title = "Confirm Email";
  return (
    <div>
      <CheckEmail></CheckEmail>
    </div>
  );
}

export default CheckEmailPage;
