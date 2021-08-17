import { ACADEMY_CATEGORY_LIST_FAIL, 
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
  ACADEMY_REVIEW_CREATE_RESET, 
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
  ACADEMY_WATCHLIST_CREATE_RESET} from "../../constants/academyConstants";

export const academyListReducer = (state = { loading: true, academys: [] }, action) => {
    switch (action.type) {
        case ACADEMY_LIST_REQUEST:
            return { loading: true };
        case ACADEMY_LIST_SUCCESS:
            return { loading: false, academys: action.payload };
        case ACADEMY_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
}

export const academyListSearchReducer = (state = { loading: true, academys: [] }, action) => {
  switch (action.type) {
      case ACADEMY_LIST_SEARCH_REQUEST:
          return { loading: true };
      case ACADEMY_LIST_SEARCH_SUCCESS:
          return { 
            loading: false, 
            academys: action.payload.listAcademy,
            pages: action.payload.pages,
            page: action.payload.page,
          };
      case ACADEMY_LIST_SEARCH_FAIL:
          return { loading: false, error: action.payload };
      default:
          return state;
  }
}

export const academyListSearchCategoryReducer = (state = { loading: true, academys: [] }, action) => {
  switch (action.type) {
      case ACADEMY_LIST_SEARCH_CATEGORY_REQUEST:
          return { loading: true };
      case ACADEMY_LIST_SEARCH_CATEGORY_SUCCESS:
        return { 
          loading: false, 
          academys: action.payload.listAcademy,
          pages: action.payload.pages,
          page: action.payload.page,
        };
      case ACADEMY_LIST_SEARCH_CATEGORY_FAIL:
          return { loading: false, error: action.payload };
      default:
          return state;
  }
}

export const academyCategoryListReducer = (
  state = { loading: true, academys: [] },
  action
) => {
  switch (action.type) {
    case ACADEMY_CATEGORY_LIST_REQUEST:
      return { loading: true };
    case ACADEMY_CATEGORY_LIST_SUCCESS:
      return { loading: false, categories: action.payload };
    case ACADEMY_CATEGORY_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const academyDetailsReducer = (state = { academy: {}, loading: true}, action) => {
  switch (action.type) {
    case ACADEMY_DETAILS_REQUEST:
      return { loading: true };
    case ACADEMY_DETAILS_SUCCESS:
      return { loading: false, academy: action.payload };
    case ACADEMY_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const academyListRelatedReducer = (state = { loading: true, academys: [] }, action) => {
  switch (action.type) {
    case ACADEMY_LIST_RELATED_REQUEST:
      return { loading: true };
    case ACADEMY_LIST_RELATED_SUCCESS:
      return { loading: false, academys: action.payload };
    case ACADEMY_LIST_RELATED_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const academyListOutlineReducer = (state = { loading: true, outlines: [] }, action) => {
  switch (action.type) {
    case ACADEMY_OUTLINE_REQUEST:
      return { loading: true };
    case ACADEMY_OUTLINE_SUCCESS:
      return { loading: false, outlines: action.payload };
    case ACADEMY_OUTLINE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const outlineDetailReducer = (state = { outline: {}, loading: true}, action) => {
  switch (action.type) {
    case ACADEMY_OUTLINE_DETAIL_REQUEST:
      return { loading: true };
    case ACADEMY_OUTLINE_DETAIL_SUCCESS:
      return { loading: false, outline: action.payload };
    case ACADEMY_OUTLINE_DETAIL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const academyReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ACADEMY_REVIEW_CREATE_REQUEST:
      return { loading: true };
    case ACADEMY_REVIEW_CREATE_SUCCESS:
      return { loading: false, success: true, review: action.payload };
    case ACADEMY_REVIEW_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ACADEMY_REVIEW_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const academyReviewsReducer = (state = { reviews: [], loading: true}, action) => {
  switch (action.type) {
    case ACADEMY_REVIEW_GET_REQUEST:
      return { loading: true };
    case ACADEMY_REVIEW_GET_SUCCESS:
      return { loading: false, reviews: action.payload };
    case ACADEMY_REVIEW_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

export const addWatchListReducer = (state = { }, action) => {
  switch (action.type) {
    case ACADEMY_WATCHLIST_CREATE_REQUEST:
      return { loading: true };
    case ACADEMY_WATCHLIST_CREATE_SUCCESS:
      return { loading: false, success: true };
    case ACADEMY_WATCHLIST_CREATE_FAIL:
      return { loading: false, error: action.payload };
    case ACADEMY_WATCHLIST_CREATE_RESET:
      return {};
    default:
      return state; 
  }
};
