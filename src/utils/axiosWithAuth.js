import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log(token, "token working");
    return axios.create({
        baseURL: "https://how-to1.herokuapp.com",
        headers: { Authorization: token, }
    });
};