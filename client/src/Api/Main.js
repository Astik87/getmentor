import axios from "axios";

let host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

let authInterceptor = config => {
    config.headers.authorization = 'Bearer ' + localStorage.getItem('token');
    return config;
};

host.interceptors.request.use(authInterceptor);

export {
    host,
    authInterceptor
};