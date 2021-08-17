import React, { useState } from "react";
import "./NavbarPart.css";
import {
  Nav,
  Navbar,
  Button,
  Form,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
// import CategoryMenu from '../CategoryMenu/CategoryMenu';
import CategoryDropdown from "../CategoryDropdown/CategoryDropdown";

const NavbarPart = (props) => {
  const [keyword, setKeyword] = useState("");

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  function logout() {
    localStorage.clear();
    props.setIsLogin(false);
    history.push("/login");
  }

  let history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    history.push(`/search/keyword/${keyword}`);
  };

  return (
    <>
      <Navbar expand="lg">
        <div>
          <Link to="/" style={{ color: "black" }}>
            <img
              alt=""
              src="https://i.ibb.co/377kyQz/logo-removebg-preview.png"
              width="100"
              height="40"
              className="d-inline-block align-top"
            />
          </Link>
        </div>
        <div>
          <Link to="/" style={{ color: "black" }}>
            <b>E-Learning</b>
          </Link>
        </div>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div className="mt-1">
            <CategoryDropdown />
          </div>
          <Form
            onSubmit={handleSubmit}
            style={{ width: "400px" }}
            className="ml-5"
          >
            <FormControl
              id="search"
              type="text"
              placeholder="Search for anything"
              style={{ width: "100%" }}
              className="mr-3"
              onChange={(e) => setKeyword(e.target.value)}
            />
          </Form>
          <Nav className="ml-auto">
            <div className="mr-3 mt-2">
              <NavLink to="/" style={{ color: "gray" }}>
                Home
              </NavLink>
            </div>
            <div className="mr-3 mt-2">
              <NavLink to="/search/keyword/all" style={{ color: "gray" }}>
                Courses
              </NavLink>
            </div>
            {props.isLogin ? (
              <div className="mr-3 mt-2">
                <NavLink to="/my-academy" style={{ color: "gray" }}>
                  My Learning
                </NavLink>
              </div>
            ) : null}
            {props.isLogin ? (
              <div className="mr-3 mt-2">
                <NavLink to="/watch-list" style={{ color: "gray" }}>
                  Watch List
                </NavLink>
              </div>
            ) : null}
            <div className="mr-4 mt-2">
              <Link to="/cart" style={{ color: "gray" }}>
                <FontAwesomeIcon className="mt-1" icon={faShoppingCart} />
                {cartItems.length > 0 && (
                  <div
                    className="position-absolute top-0 left-50 translate-middle badge bg-danger rounded-circle"
                    style={{ color: "white" }}
                  >
                    {cartItems.length}
                  </div>
                )}
              </Link>
              {/* <NavLink to="/coursesearch" className="ml-1" style={{ color: 'gray' }}>Cart</NavLink> */}
            </div>
            {props.isLogin ? (
              <NavDropdown
                title={localStorage.username}
                id="basic-nav-dropdown"
                alignRight
              >
                <NavDropdown.Item onClick={() => history.push("/profile")}>
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <div className="mr-2">
                <Link to="/login">
                  <Button className="pl-5 pr-5" variant="outline-secondary">
                    Login
                  </Button>
                </Link>
              </div>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarPart;
