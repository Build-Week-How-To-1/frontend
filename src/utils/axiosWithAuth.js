import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    return axios.create({
        baseURL: "https://how-to1.herokuapp.com/",
        headers: { Authorization: token }
    });
};