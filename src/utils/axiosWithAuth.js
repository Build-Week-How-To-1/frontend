import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    return axios.create({
        baseURL: "https://reqres.in/api",
        headers: { Authorization: token }
    });
};