import "./App.css";
import React, { useState } from "react";
import NavbarPart from "./components/NavbarPart/NavbarPart";
import Footer from "./components/Footer/Footer";
import CourseSearch from "./pages/CourseSearch";
import CourseDetail from "./pages/CourseDetail";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import Cart from "./pages/Cart";
import CourseSearchCategory from "./pages/CourseSearchCategory";
import ProtectedRouteUser from "./components/ProtectedRouteUser";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import MyProfile from "./pages/MyProfile";
import CheckEmailPage from "./pages/CheckEmailPage";
import ConfirmEmail from "./components/User/ConfirmEmail/ConfirmEmail";
import CourseVideo from "./pages/CourseVideo";
import MyAcademy from "./pages/MyAcademy";
import MyWatchList from "./pages/MyWatchList";

function App() {
  const [isLogin, setIsLogin] = useState(localStorage.username ? true : false);

  return (
    <div className="App">
      <Router>
        <NavbarPart {...{ isLogin, setIsLogin }} />

        <Switch>
          <Route exact path="/coursesearch">
            <CourseSearch />
          </Route>
          {/* <Route exact path="/coursedetail">
					<CourseDetail />
				</Route> */}
          <Route
            exact
            path="/coursedetail/:id"
            component={CourseDetail}
          ></Route>
          {/* <Route exact path="/cart/:id" component={Cart}></Route> */}
          <Route
            path="/search/keyword/:keyword?"
            component={CourseSearch}
            exact
          ></Route>
          <Route
            path="/search/keyword/:keyword/order/:order/page/:pageNumber"
            component={CourseSearch}
            exact
          ></Route>
          <Route
            path="/search/category/:categoryId"
            component={CourseSearchCategory}
            exact
          ></Route>
          <Route
            path="/search/category/:categoryId/order/:order/page/:pageNumber"
            component={CourseSearchCategory}
            exact
          ></Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route
            path="/coursevideo/academy/:academyId/outline/:outlineId"
            component={CourseVideo}
            exact
          ></Route>
          <Route
            path="/coursevideo/academy/:academyId"
            component={CourseVideo}
            exact
          ></Route>
          <Route exact path="/login">
            <Login {...{ isLogin, setIsLogin }} />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/confirm-email">
            <CheckEmailPage />
          </Route>
          <Route
            path="/verify/:userId/:code"
            component={ConfirmEmail}
            exact
          ></Route>
          <ProtectedRouteUser
            path="/profile"
            component={MyProfile}
          ></ProtectedRouteUser>
          <ProtectedRouteUser
            path="/my-academy"
            component={MyAcademy}
          ></ProtectedRouteUser>
          <ProtectedRouteUser
            path="/watch-list"
            component={MyWatchList}
          ></ProtectedRouteUser>
          <Route exact path="/">
            <Home />
          </Route>
          <Redirect to="/">
            <Home />
          </Redirect>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
