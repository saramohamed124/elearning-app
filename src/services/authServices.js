import Cookies from "js-cookie";
import { REFRESH_TOKEN, REVOKE_TOKEN } from "../api/endpoints";
import { api } from "../api/api";
import axios from "axios";

/**
 * Stores the tokens securely in cookies.
 */
const setToken = (token, refreshToken, tokenExpiration, id, email, role) => { // role and id and email are optional
    const expiresAt = new Date(tokenExpiration).getTime();
    Cookies.set("accessToken", token);
    Cookies.set("refreshToken", refreshToken);
    Cookies.set("expiresIn", expiresAt);
    Cookies.set("id", id);
    Cookies.set("email", email);
    Cookies.set("role", role);
};

/**
 * Retrieves the stored tokens.
 */
const getToken = () => ({
    accessToken: Cookies.get("accessToken"),
    refreshToken: Cookies.get("refreshToken"),
    expiresIn: Cookies.get("expiresIn"),
    id: Cookies.get("id"),
    email: Cookies.get("email"),
    role: Cookies.get("role")
});

/**
 * Removes stored authentication tokens.
 */
const removeToken = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    Cookies.remove("expiresIn");
    Cookies.remove("id");
    Cookies.remove("email");
    Cookies.remove("role");
};

/**
 * Automatically refreshes the access token when expired.
 */
const refreshToken = async () => {
    try {
        const {refreshToken, accessToken, id, role, email } = getToken();
        if (!refreshToken || !accessToken) {
            throw new Error("Token not found. Please log in again.");
        }
        const res = await axios.post(`${process.env.REACT_APP_API_URL}${REFRESH_TOKEN}`, {  accessToken, refreshToken });
        
        const { token: newAccessToken, refreshToken: newRefreshToken, tokenExpiration } = res.data?.data;

        // Store the new tokens
        setToken(newAccessToken, newRefreshToken, tokenExpiration, id, email, role);

        return newAccessToken; // Return new access token in case it's needed
    } catch (error) {
        removeToken();
        console.error("Refresh token failed:", error?.response?.data?.message || error.message);
        throw new Error(error?.response?.data?.message || "Session expired, please log in again.");
    }
};

/**
 * Logs the user out and revokes the token.
 */
const logout = async (email) => {
    try {
        await api.post(REVOKE_TOKEN, { username: email });
    } catch (error) {
        console.error("Logout failed:", error?.response?.data?.message || error.message);
    } finally {
        removeToken();
    }
};

export { refreshToken, logout, getToken, setToken };
