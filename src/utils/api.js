import axios from 'axios';

export const CONST = {
    // BACKEND_URL: 'http://192.168.1.15:5000/api/',
    BACKEND_URL: 'https://api.allexchbets.com/v1/',
};

export const isLogin = () => {
    if (localStorage.getItem('user')) return true;
    return false;
}


// export const authHeader = () => {
//     const user = JSON.parse(localStorage.getItem('user'));
//     if (user && user?.token) {
//         return { 'Authorization': 'Bearer ' + user?.token };
//     } else {
//         return {};
//     }
// };

export const authHeader = () => {
    const token = localStorage.getItem('token');
    if (token) {
        return { 'Authorization': 'Bearer ' + token };
    } else {
        return {};
    }
};


export const apiCall = async (method, path, payload) => {
    try {
        const response = await axios({
            method,
            url: CONST.BACKEND_URL + path,
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                ...authHeader(),
            },
        });
        return response;
    } catch (error) {
        // return handleApiError(error);
    }
};

export const apiCall2 = async (method, path, payload) => {
    try {
        const response = await axios({
            method,
            url: CONST.BACKEND_URL + path,
            data: payload,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NmNkNWMyMTNmZDE5NzE5Y2Q5NTQ2OWQiLCJpYXQiOjE3MjU4ODcwNzEsImV4cCI6MTcyODQ3OTA3MX0.wkL1JCX4hnpDaxJ4JjEUl9x4trJBU5DDVErFrZw3Gek' 
            },
        });
        return response;
    } catch (error) {
        // return handleApiError(error);
        


        
    }
};

export const apiCallUploadImage = async (method, path, payload) => {
    try {
        const response = await axios({
            method,
            url: CONST.BACKEND_URL + path,
            data: payload,
            headers: {
                'Content-Type': 'multipart/form-data' ,
                ...authHeader(),
            },
        });
        return response;
    } catch (error) {
        return handleApiError(error);
    }
};

const handleApiError = (error) => {
    if (error.response) {
        const { status, data } = error.response;
        if (status === 404 || status === 400 || data.code === 3) {
            localStorage.clear();
            window.location.href = '/';
        }
        return data || 'An error occurred';
    } else {
        return error
    }
}