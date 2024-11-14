import { apiCall, apiCall2 } from "../../utils/api";

const ENDPOINTS = {
    LOGIN: 'user/login',
    SIGNUP:'user/createuser'
};

export const login = async (credentials) => {
    try {
        const response = await apiCall('POST', ENDPOINTS.LOGIN, credentials);

        if (response?.data?.data) {
            localStorage.setItem('token', response?.data?.token);
            localStorage.setItem('user', JSON.stringify(response.data?.data));
            return response.data
        }
        return response
    } catch (error) {
        return error
    }
};
export const Signup = async (credentials) => {
    try {
        const response = await apiCall2('POST', ENDPOINTS.SIGNUP, credentials);
        if (response?.data?.data) {
            return response.data
        }
        return response
    } catch (error) {
        return error
    }
};
