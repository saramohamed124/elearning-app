import axios from "axios";
import { getToken, refreshToken, logout } from "../services/authServices";

export const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

api.interceptors.request.use(
    async (config) => {
        const { accessToken, expiresIn } = getToken(); 
        // Check if the access token is expired or not   
        const tokenExpiration = expiresIn ? Number(expiresIn) : null; // Convert to number if exists            
        // alert(expiresIn && Date.now() >= tokenExpiration ? "Expired" : "Not Expired")
        if (expiresIn && Date.now() >= tokenExpiration ) {
            try {
                const { newAccessToken } = await refreshToken();
                config.headers.Authorization = `Bearer ${newAccessToken}`;
            } catch(error) {
                logout();
                window.location.href = '/login';
                return Promise.reject(new Error("Failed to refresh token"));
            }
        } else {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (err) => Promise.reject(err),
);