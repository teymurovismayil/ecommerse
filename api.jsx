import axios from "axios"

axios.interceptors.request.use(
    function (config) {
        const { origin } = new URL(config.url)
        const allowedOrigins = [`http://localhost:3000/products`];
        const token = localStorage.getItem('access-token')
        if (allowedOrigins.includes(origin)) {
            config.headers.authorization = token;
        }
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

export const fetchRegister = async (input) => {
    const { data } = await axios.post(
        `http://localhost:3000/products`,
        input
    );
    return data;
};

export const fetchLogin = async (input) => {
    const { data } = await axios.post(
        `http://localhost:3000/products`,
        input
    );  
    return data;
};

export const fetchMe = async () => {
    const { data } = await axios.post(
        `http://localhost:3000/products`,
    );
    return data;    
}

export const fetchLogout = async () => {
    const { data } = await axios.post(
        `http://localhost:3000/products`,
        {
            refresh_token: localStorage.getItem("refresh-token"),
        }
    );
    return data;
}

