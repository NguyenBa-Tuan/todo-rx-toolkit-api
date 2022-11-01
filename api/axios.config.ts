import { ApiUrl } from "./api";
import axios from "axios";

const axiosConfig = axios.create({
    baseURL: ApiUrl,
});
axiosConfig.defaults.headers.common["Authorization"] =
    "AUTH TOKEN FROM INSTANCE";

axiosConfig.defaults.headers.post["Content-Type"] = "application/json";

axiosConfig.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosConfig.interceptors.response.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosConfig;
