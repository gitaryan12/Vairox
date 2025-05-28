import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';

const axiosInstance = axios.create({
    baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        // Get token from localStorage or wherever you store it
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;

        // Handle 401 errors (unauthorized)
        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                // Attempt to refresh token
                const refreshToken = localStorage.getItem('refreshToken');
                if (refreshToken) {
                    const response = await axios.post(`${baseURL}/api/auth/refresh-token`, {
                        refreshToken,
                    });

                    if (response.data.token) {
                        localStorage.setItem('token', response.data.token);
                        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`;
                        return axiosInstance(originalRequest);
                    }
                }
            } catch (error) {
                // If refresh token fails, redirect to login
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('token');
                    localStorage.removeItem('refreshToken');
                    window.location.href = '/sign-in';
                }
            }
        }

        return Promise.reject(error);
    }
);

export default axiosInstance;
