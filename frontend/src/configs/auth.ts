const url =
  process.env.NODE_ENV === "development" ? "http://127.0.0.1:8000" : "";
export default {
  baseApiUrl: url,
  meEndpoint: url + "/api/users/me/",
  loginEndpoint: url + "/api/token/",
  registerEndpoint: url + "/api/register/",
  storageTokenKeyName: "authToken",
  storageRefreshTokenKeyName: "refreshToken",
};
