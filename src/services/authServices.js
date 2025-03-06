import axios from "axios";
import Cookies from "js-cookie";
import { REFRESH_TOKEN, REVOKE_TOKEN } from "../api/endpoints";
import { api } from "../api/api";

/**
 * Stores the tokens securely in cookies.
 */
const setToken = (token, refreshToken, tokenExpiration, id, email, role) => {
    const expiresAt = new Date(tokenExpiration).getTime();

    Cookies.set("accessToken", token, { secure: true, sameSite: "Strict" });
    Cookies.set("refreshToken", refreshToken, { secure: true, sameSite: "Strict" });
    Cookies.set("expiresIn", expiresAt, { secure: true, sameSite: "Strict" });
    Cookies.set("id", id, { secure: true, sameSite: "Strict" });
    Cookies.set("email", email, { secure: true, sameSite: "Strict" });
    Cookies.set("role", role, { secure: true, sameSite: "Strict" });
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
        const { refreshToken, accessToken } = getToken();

        if (!refreshToken || !accessToken) {
            throw new Error("Token not found. Please log in again.");
        }

        const res = await axios.post(REFRESH_TOKEN, { refreshToken, accessToken });
        const { newRefreshToken, newAccessToken, tokenExpiration } = res.data;

        // Store the new tokens
        setToken(newAccessToken, newRefreshToken, tokenExpiration);

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
