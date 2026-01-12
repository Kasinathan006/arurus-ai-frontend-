import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// API Service URLs from environment variables
const API_URLS = {
    auth: import.meta.env.VITE_AUTH_URL || 'http://localhost:3001',
    core: import.meta.env.VITE_API_URL || 'http://localhost:3002',
    ai: import.meta.env.VITE_AI_URL || 'http://localhost:3003',
    jira: import.meta.env.VITE_JIRA_URL || 'http://localhost:3004',
    notes: import.meta.env.VITE_NOTES_URL || 'http://localhost:3005',
    reports: import.meta.env.VITE_REPORTS_URL || 'http://localhost:3006',
    gateway: import.meta.env.VITE_GATEWAY_URL || 'http://localhost:80',
};

// Token management
const TOKEN_KEY = 'auras_auth_token';
const USER_KEY = 'auras_user';

export const getToken = (): string | null => {
    return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string): void => {
    localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = (): void => {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
};

export const getUser = (): any => {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
};

export const setUser = (user: any): void => {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
};

// Create Axios instances for each service
const createApiInstance = (baseURL: string): AxiosInstance => {
    const instance = axios.create({
        baseURL,
        timeout: 30000,
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Request interceptor - Attach JWT token
    instance.interceptors.request.use(
        (config: InternalAxiosRequestConfig) => {
            const token = getToken();
            if (token && config.headers) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        (error: AxiosError) => {
            return Promise.reject(error);
        }
    );

    // Response interceptor - Handle errors globally
    instance.interceptors.response.use(
        (response: AxiosResponse) => {
            return response;
        },
        (error: AxiosError) => {
            // Handle 401 Unauthorized - Token expired or invalid
            if (error.response?.status === 401) {
                removeToken();
                window.location.href = '/login';
            }

            // Handle 403 Forbidden
            if (error.response?.status === 403) {
                console.error('Access forbidden:', error.response.data);
            }

            // Handle 500 Server Error
            if (error.response?.status === 500) {
                console.error('Server error:', error.response.data);
            }

            return Promise.reject(error);
        }
    );

    return instance;
};

// API instances for each microservice
export const authApi = createApiInstance(API_URLS.auth);
export const coreApi = createApiInstance(API_URLS.core);
export const aiApi = createApiInstance(API_URLS.ai);
export const jiraApi = createApiInstance(API_URLS.jira);
export const notesApi = createApiInstance(API_URLS.notes);
export const reportsApi = createApiInstance(API_URLS.reports);
export const gatewayApi = createApiInstance(API_URLS.gateway);

// Default export - Core API
export default coreApi;

// API Service URLs export
export { API_URLS };
