import { axiosInstance } from "../../API/axiosConfig";

import {
  CART_ADD_ITEM,
  CART_EMPTY,
  CART_REGISTER_ITEMS_FAIL,
  CART_REGISTER_ITEMS_REQUEST,
  CART_REGISTER_ITEMS_SUCCESS,
  CART_REMOVE_ITEM,
} from "../../constants/cartConstants";

export const addToCart = (academyId) => async (dispatch, getState) => {
  const res = await axiosInstance.get(`academy/detail/${academyId}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      name: res.data.data.academy_name,
      avatar: res.data.data.avatar,
      price_discount: res.data.data.price_discount,
      price: res.data.data.price,
      academy: res.data.data.academy_id,
      teacher: res.data.data.teacher,
    },
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (academyId) => async (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: academyId,
  });
  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const registerFromCart =
  (userToken, listAcademy) => async (dispatch, getState) => {
    dispatch({ type: CART_REGISTER_ITEMS_REQUEST });
    try {
      const res = await axiosInstance.post(
        "user/register-academy",
        listAcademy
      );

      if (res.status === 200) {
        dispatch({
          type: CART_REGISTER_ITEMS_SUCCESS,
          payload: res.data.message,
        });
        dispatch({ type: CART_EMPTY });
        localStorage.removeItem("cartItems");
      }

      dispatch({
        type: CART_REGISTER_ITEMS_FAIL,
        payload: res.response.data.message,
      });
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: CART_REGISTER_ITEMS_FAIL,
        payload: message,
      });
    }
  };
