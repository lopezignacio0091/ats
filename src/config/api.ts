import axios from "axios";

const getToken = () => {
  return localStorage.getItem("token");
};

const api = axios.create({
  baseURL: `${import.meta.env.VITE_URL_APP}/api`,
  headers: {
    "Content-Type": "application/json",
    // Set the 'Authorization' header with the token
    Authorization: `Bearer ${getToken()}`,
  },
});

api.interceptors.response.use(
  (response) => {
    if (response.status === 204) {
      return response;
    }

    // cubre el caso de un download de un archivo
    if (response.status === 200 && response.request.responseType === "blob") {
      return response;
    }
    return response;
  },
  (error) => {
    if (!error.status && !error.response) {
      console.log("error");
    }

    if (error.response) {
      if (error.response.status === 403) {
        window.location.reload();
        return error.response;
      }
      if (error.response.status !== 401) {
        return error.response;
      }
    }
    throw error;
  }
);

export default api;
