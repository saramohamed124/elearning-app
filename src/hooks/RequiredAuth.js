import React, { useEffect, useState } from 'react';
import { SuccessMsgToast } from "../components/Auth/utils/toasts";
import { useNavigate } from "react-router-dom";
import { getToken } from "../services/authServices";

const RequiredAuth = ({ children }) => {
    const { accessToken } = getToken();
    const navigate = useNavigate();

    useEffect(() => {
        if (!accessToken) {
            SuccessMsgToast("يجب تسجيل الدخول أولا");
            console.log("Access token not found. Redirecting to login.");
            
            navigate("/login");
        }
    }, [accessToken, navigate]);

    return accessToken ? children : null;
};

export default RequiredAuth;
