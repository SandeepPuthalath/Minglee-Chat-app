import axios from "axios"
import { Constants } from "../../../utils/constants"


const instance = axios.create({
    baseURL: Constants.BaseUrl,
});


instance.interceptors.request.use((request) => {
    let authTokens = localStorage.getItem("authTokens") ? JSON.parse(localStorage.getItem("authTokens")) : null;
    if (authTokens) {
        request.headers.Authorization = `Bearer ${authTokens.access}`;
    }
    return request;
}, (error) => {
    throw new Error(error)
})



export default instance