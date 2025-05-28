import axiosInstance from './index';

export const api = {
    get: <T>(url: string, config = {}) => 
        axiosInstance.get<T>(url, config),
    
    post: <T>(url: string, data = {}, config = {}) =>
        axiosInstance.post<T>(url, data, config),
    
    put: <T>(url: string, data = {}, config = {}) =>
        axiosInstance.put<T>(url, data, config),
    
    delete: <T>(url: string, config = {}) =>
        axiosInstance.delete<T>(url, config),
    
    patch: <T>(url: string, data = {}, config = {}) =>
        axiosInstance.patch<T>(url, data, config),
};

export type ApiResponse<T> = {
    data: T;
    status: number;
    message?: string;
};
