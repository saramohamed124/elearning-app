import axios from "axios";
import { getToken, refreshToken, logout } from "../services/authServices";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
    async (config) => {
        const { accessToken, expiresIn } = getToken();        
        if(Date.now() >= expiresIn || accessToken === isNaN) {
            try{
            const { newAccessToken } = await refreshToken();
            config.headers.Authorization = `Bearer ${newAccessToken}`;
            }catch{
                logout();
                window.location.href = '/login';
            }
        }else{
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (err) => Promise.reject(err),
);