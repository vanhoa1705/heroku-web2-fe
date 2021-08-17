import { axiosInstance } from "../../API/axiosConfig";
import {
  ACADEMY_CATEGORY_LIST_FAIL,
  ACADEMY_CATEGORY_LIST_REQUEST,
  ACADEMY_CATEGORY_LIST_SUCCESS,
  ACADEMY_DETAILS_FAIL,
  ACADEMY_DETAILS_REQUEST,
  ACADEMY_DETAILS_SUCCESS,
  ACADEMY_LIST_FAIL,
  ACADEMY_LIST_REQUEST,
  ACADEMY_LIST_SUCCESS,
  ACADEMY_LIST_RELATED_FAIL,
  ACADEMY_LIST_RELATED_REQUEST,
  ACADEMY_LIST_RELATED_SUCCESS,
  ACADEMY_LIST_SEARCH_CATEGORY_FAIL,
  ACADEMY_LIST_SEARCH_CATEGORY_REQUEST,
  ACADEMY_LIST_SEARCH_CATEGORY_SUCCESS,
  ACADEMY_LIST_SEARCH_FAIL,
  ACADEMY_LIST_SEARCH_REQUEST,
  ACADEMY_LIST_SEARCH_SUCCESS,
  ACADEMY_REVIEW_CREATE_FAIL,
  ACADEMY_REVIEW_CREATE_REQUEST,
  ACADEMY_REVIEW_CREATE_SUCCESS,
  ACADEMY_REVIEW_GET_FAIL,
  ACADEMY_REVIEW_GET_REQUEST,
  ACADEMY_REVIEW_GET_SUCCESS,
  ACADEMY_WATCHLIST_CREATE_FAIL,
  ACADEMY_WATCHLIST_CREATE_REQUEST,
  ACADEMY_WATCHLIST_CREATE_SUCCESS,
  ACADEMY_OUTLINE_DETAIL_FAIL,
  ACADEMY_OUTLINE_DETAIL_REQUEST,
  ACADEMY_OUTLINE_DETAIL_SUCCESS,
  ACADEMY_OUTLINE_FAIL,
  ACADEMY_OUTLINE_REQUEST,
  ACADEMY_OUTLINE_SUCCESS,
} from "../../constants/academyConstants";

export const listAcademys = async (dispatch) => {
  dispatch({
    type: ACADEMY_LIST_REQUEST,
  });
  try {
    const resAll = await axiosInstance.get("academy/search?keyword=");
    const resOutstanding = await axiosInstance.get("academy/top4highlight");
    const resMostView = await axiosInstance.get("academy/top10view");
    const resLatest = await axiosInstance.get("academy/top10latest");
    const resCate = await axiosInstance.get("category/top4category");
    dispatch({
      type: ACADEMY_LIST_SUCCESS,
      payload: {
        listAll: resAll.data.data,
        listOutstanding: resOutstanding.data.data,
        listMostView: resMostView.data.data,
        listLatest: resLatest.data.data,
        listCate: resCate.data.data,
      },
    });
  } catch (err) {
    dispatch({ type: ACADEMY_LIST_FAIL, payload: err.response.data.message });
  }
};

export const listSearchAcademys =
  ({ keyword = "", order = "", pageNumber = "" }) =>
  async (dispatch) => {
    dispatch({
      type: ACADEMY_LIST_SEARCH_REQUEST,
    });
    try {
      let res;
      if (order === "lowtohigh") {
        res = await axiosInstance.get(
          `academy/search?keyword=${keyword}&price=asc&page=${pageNumber}&limit=3`
        );
      }
      if (order === "hightolow") {
        res = await axiosInstance.get(
          `academy/search?keyword=${keyword}&price=desc&page=${pageNumber}&limit=3`
        );
      }
      if (order === "toprated") {
        res = await axiosInstance.get(
          `academy/search?keyword=${keyword}&rate=desc&page=${pageNumber}&limit=3`
        );
      }
      if (order === "") {
        res = await axiosInstance.get(
          `academy/search?keyword=${keyword}&page=${pageNumber}&limit=3`
        );
      }
      if (keyword === "all") {
        if (order === "lowtohigh") {
          res = await axiosInstance.get(
            `academy/search?keyword=&price=asc&page=${pageNumber}&limit=3`
          );
        }
        if (order === "hightolow") {
          res = await axiosInstance.get(
            `academy/search?keyword=&price=desc&page=${pageNumber}&limit=3`
          );
        }
        if (order === "toprated") {
          res = await axiosInstance.get(
            `academy/search?keyword=&rate=desc&page=${pageNumber}&limit=3`
          );
        } else {
          res = await axiosInstance.get(
            `academy/search?keyword=&page=${pageNumber}&limit=3`
          );
        }
      }
      dispatch({
        type: ACADEMY_LIST_SEARCH_SUCCESS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: ACADEMY_LIST_SEARCH_FAIL,
        payload: err.response.data.message,
      });
    }
  };

export const listSearchCategoryAcademys =
  (categoryId, order, pageNumber) => async (dispatch) => {
    dispatch({
      type: ACADEMY_LIST_SEARCH_CATEGORY_REQUEST,
    });
    try {
      let res;
      if (order === "lowtohigh") {
        res = await axiosInstance.get(
          `academy/search?category=${categoryId}&price=asc&page=${pageNumber}&limit=3`
        );
      }
      if (order === "hightolow") {
        res = await axiosInstance.get(
          `academy/search?category=${categoryId}&price=desc&page=${pageNumber}&limit=3`
        );
      }
      if (order === "toprated") {
        res = await axiosInstance.get(
          `academy/search?category=${categoryId}&rate=desc&page=${pageNumber}&limit=3`
        );
      }
      if (order === "") {
        res = await axiosInstance.get(
          `academy/category/${categoryId}&page=${pageNumber}&limit=3`
        );
      }

      dispatch({
        type: ACADEMY_LIST_SEARCH_CATEGORY_SUCCESS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: ACADEMY_LIST_SEARCH_CATEGORY_FAIL,
        payload: err.response.data.message,
      });
    }
  };

export const listAcademyCategories = () => async (dispatch) => {
  dispatch({
    type: ACADEMY_CATEGORY_LIST_REQUEST,
  });
  try {
    const res = await axiosInstance.get("category");
    dispatch({ type: ACADEMY_CATEGORY_LIST_SUCCESS, payload: res.data.data });
  } catch (error) {
    dispatch({ type: ACADEMY_CATEGORY_LIST_FAIL, payload: error.message });
  }
};

export const detailsAcademy = (academyId) => async (dispatch) => {
  dispatch({ type: ACADEMY_DETAILS_REQUEST, payload: academyId });

  try {
    const res = await axiosInstance.get("academy/detail/" + academyId);
    dispatch({ type: ACADEMY_DETAILS_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({
      type: ACADEMY_DETAILS_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const listRelatedAcademys = (academyId) => async (dispatch) => {
  dispatch({
    type: ACADEMY_LIST_RELATED_REQUEST,
  });
  try {
    const res = await axiosInstance.get(`academy/${academyId}/related`);
    dispatch({
      type: ACADEMY_LIST_RELATED_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ACADEMY_LIST_RELATED_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const listOutlineAcademy = (academyId) => async (dispatch) => {
  dispatch({
    type: ACADEMY_OUTLINE_REQUEST,
  });
  try {
    const res = await axiosInstance.get(`academy/outline/${academyId}`);
    dispatch({
      type: ACADEMY_OUTLINE_SUCCESS,
      payload: res.data.data,
    });
  } catch (err) {
    dispatch({
      type: ACADEMY_OUTLINE_FAIL,
      payload: err.response.data.message,
    });
  }
};

export const detailAcademyOutline =
  (outlineId, userToken) => async (dispatch) => {
    dispatch({ type: ACADEMY_OUTLINE_DETAIL_REQUEST, payload: outlineId });

    try {
      const res = await axiosInstance.get("outline/detail/" + outlineId);
      dispatch({
        type: ACADEMY_OUTLINE_DETAIL_SUCCESS,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: ACADEMY_OUTLINE_DETAIL_FAIL,
        payload: err.response.data.message,
      });
    }
  };

export const addToWatchList = (academyId, userToken) => async (dispatch) => {
  dispatch({ type: ACADEMY_WATCHLIST_CREATE_REQUEST });
  try {
    const res = await axiosInstance.post(`/user/watch-list/${academyId}`);
    if (res.status === 200) {
      dispatch({
        type: ACADEMY_WATCHLIST_CREATE_SUCCESS,
        payload: res.data.message,
      });
    }

    const message =
      res.response && res.response.data.message
        ? res.response.data.message
        : res.message;
    dispatch({ type: ACADEMY_WATCHLIST_CREATE_FAIL, payload: message });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ACADEMY_WATCHLIST_CREATE_FAIL, payload: message });
  }
};

export const createReview = (userToken, review) => async (dispatch) => {
  dispatch({ type: ACADEMY_REVIEW_CREATE_REQUEST });
  try {
    const res = await axiosInstance.post("user/rate", review);
    if (res.status === 200) {
      dispatch({
        type: ACADEMY_REVIEW_CREATE_SUCCESS,
        payload: res.data.review,
      });
    }

    const message =
      res.response && res.response.data.message
        ? res.response.data.message
        : res.message;
    dispatch({ type: ACADEMY_REVIEW_CREATE_FAIL, payload: message });
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    dispatch({ type: ACADEMY_REVIEW_CREATE_FAIL, payload: message });
  }
};

export const getReviews = (academyId) => async (dispatch) => {
  dispatch({ type: ACADEMY_REVIEW_GET_REQUEST });

  try {
    const res = await axiosInstance.get(`academy/${academyId}/rate`);
    dispatch({ type: ACADEMY_REVIEW_GET_SUCCESS, payload: res.data.data });
  } catch (err) {
    dispatch({
      type: ACADEMY_REVIEW_GET_FAIL,
      payload: err.response.data.message,
    });
  }
};
