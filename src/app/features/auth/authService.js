import axios from "axios";
const API_URL = "http://localhost:8000/api/users";
const register = async (user) => {
    const response = await axios.post(API_URL, user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};
const logout = () => {
    return localStorage.removeItem("user");
};
const loginUser = async (user) => {
    const response = await axios.post(API_URL + "/login", user);
    console.log(user);
    if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
};
export const authService = {
    register,
    loginUser,
    logout,
};
