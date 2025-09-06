import API from "./api";

// Signup
export const signup = async (userData) => {
  const { data } = await API.post("/auth/signup", userData);
  return data;
};

// Signin
export const signin = async (userData) => {
  const { data } = await API.post("/auth/signin", userData);
  if (data.token) {
    localStorage.setItem("token", data.token);
  }
  return data;
};
