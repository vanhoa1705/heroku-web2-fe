import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://vanhoa00.herokuapp.com/api",
  timeout: 5000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem("token");
    if (accessToken) {
      config.headers["x-access-token"] = accessToken;
    }
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      error.response.data.message === "Invalid access token!"
    ) {
      const refreshToken = localStorage.getItem("refreshToken");

      if (refreshToken) {
        return axiosInstance
          .post("/auth/refresh", {
            accessToken: localStorage.getItem("token"),
            refreshToken: refreshToken,
          })
          .then((response) => {
            localStorage.setItem("token", response.data.data.accessToken);
            return axiosInstance(originalRequest);
          })
          .catch((err) => {
            return err;
          });
      } else {
        console.log("Refresh token is revoke");
        // window.location.href = "/login/";
        // localStorage.clear();
      }
    } else {
      // window.location.href = "/login/";
      // localStorage.clear();
    }

    // specific error handling done elsewhere
    return Promise.reject(error);
  }
);

export function parseJwt(token) {
  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}
