import axios from "axios";

export const api = axios.create({
    baseURL:'http://elearningsystem.runasp.net/'
});