import { authApi, setToken, setUser, removeToken, getToken } from '../lib/api';

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface SignupData {
    name: string;
    email: string;
    password: string;
    role?: string;
}

export interface AuthResponse {
    success: boolean;
    token: string;
    user: {
        id: string;
        name: string;
        email: string;
        role: string;
    };
}

class AuthService {
    /**
     * Login user with email and password
     * POST to http://localhost:3001/api/auth/login
     */
    async login(credentials: LoginCredentials): Promise<AuthResponse> {
        try {
            const response = await authApi.post<AuthResponse>('/api/auth/login', credentials);

            if (response.data.success && response.data.token) {
                // Store JWT token and user data
                setToken(response.data.token);
                setUser(response.data.user);
            }

            return response.data;
        } catch (error: any) {
            console.error('Login error:', error);
            throw new Error(error.response?.data?.message || 'Login failed');
        }
    }

    /**
     * Signup new user
     * POST to http://localhost:3001/api/auth/signup
     */
    async signup(data: SignupData): Promise<AuthResponse> {
        try {
            const response = await authApi.post<AuthResponse>('/api/auth/signup', data);

            if (response.data.success && response.data.token) {
                // Store JWT token and user data
                setToken(response.data.token);
                setUser(response.data.user);
            }

            return response.data;
        } catch (error: any) {
            console.error('Signup error:', error);
            throw new Error(error.response?.data?.message || 'Signup failed');
        }
    }

    /**
     * Google OAuth login
     * POST to http://localhost:3001/api/auth/google
     */
    async googleLogin(googleToken: string): Promise<AuthResponse> {
        try {
            const response = await authApi.post<AuthResponse>('/api/auth/google', {
                token: googleToken,
            });

            if (response.data.success && response.data.token) {
                setToken(response.data.token);
                setUser(response.data.user);
            }

            return response.data;
        } catch (error: any) {
            console.error('Google login error:', error);
            throw new Error(error.response?.data?.message || 'Google login failed');
        }
    }

    /**
     * Logout user
     */
    logout(): void {
        removeToken();
        window.location.href = '/';
    }

    /**
     * Check if user is authenticated
     */
    isAuthenticated(): boolean {
        return !!getToken();
    }

    /**
     * Verify token validity
     * GET to http://localhost:3001/api/auth/verify
     */
    async verifyToken(): Promise<boolean> {
        try {
            const response = await authApi.get('/api/auth/verify');
            return response.data.success;
        } catch (error) {
            console.error('Token verification failed:', error);
            return false;
        }
    }

    /**
     * Request password reset
     * POST to http://localhost:3001/api/auth/forgot-password
     */
    async forgotPassword(email: string): Promise<{ success: boolean; message: string }> {
        try {
            const response = await authApi.post('/api/auth/forgot-password', { email });
            return response.data;
        } catch (error: any) {
            console.error('Forgot password error:', error);
            throw new Error(error.response?.data?.message || 'Password reset request failed');
        }
    }

    /**
     * Reset password with token
     * POST to http://localhost:3001/api/auth/reset-password
     */
    async resetPassword(token: string, newPassword: string): Promise<{ success: boolean; message: string }> {
        try {
            const response = await authApi.post('/api/auth/reset-password', {
                token,
                password: newPassword,
            });
            return response.data;
        } catch (error: any) {
            console.error('Reset password error:', error);
            throw new Error(error.response?.data?.message || 'Password reset failed');
        }
    }
}

export default new AuthService();
