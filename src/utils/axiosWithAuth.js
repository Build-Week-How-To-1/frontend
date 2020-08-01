import axios from "axios";


const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    console.log(token);
    return axios.create({
        baseURL: "https://how-to1.herokuapp.com/api",
        headers: { Authorization: token }
    });
};

export default axiosWithAuth;