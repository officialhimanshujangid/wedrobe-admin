import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { login, Signup } from '../services/Auth';
import { toast } from 'react-toastify';

// Initial state
const initialState = {
    isAuthenticated: !!localStorage.getItem('user'),
    auth: JSON.parse(localStorage.getItem('user')) || '',
    token: localStorage.getItem('token') || '',
    loading: false,
    message: '',
    showMessage: false,
};

// Async thunks
export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await login(credentials);
            if (response.success) {
                return response;
            } else {
                return rejectWithValue(response);
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const SignUpUser = createAsyncThunk(
    'user/SignupUser',
    async (credentials, { rejectWithValue }) => {
        try {
            const response = await Signup(credentials);
            if (response.success) {
                return response;
            } else {
                return rejectWithValue(response);
            }
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


export const logoutUser = createAsyncThunk(
    'user/logoutUser',
    async (_, { rejectWithValue }) => {
        try {
 
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            localStorage.clear();
            return 'Logged out successfully';
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Slice
const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            // Handle loginUser actions
            .addCase(loginUser.pending, (state) => {
                state.isAuthenticated = false;
                state.loading = true;
                state.message = '';
                state.showMessage = false;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.token = action.payload.data;  // Adjust according to the payload structure
                state.auth = action.payload.token || '';  // Adjust according to the payload structure
                state.loading = false;
                state.message = action.payload.message || '';
                state.showMessage = true;
                toast.success(action.payload.message);
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.isAuthenticated = false;
                state.loading = false;
                state.message = action.payload || ''; // Set message from error
                state.showMessage = true; // Show message on failure
                toast.error(action.payload || 'Login failed');
            })
            .addCase(SignUpUser.pending, (state) => {
                state.loading = true;
                state.userCreated = false;
                state.error = null; // Reset error state when loading
                state.successMessage = null; // Reset success message
            })
            .addCase(SignUpUser.fulfilled, (state) => {
                state.loading = false;
                state.userCreated = true; // Store the user data in state
                state.successMessage = 'Signup successful!';
            })
            .addCase(SignUpUser.rejected, (state, action) => {
                state.loading = false;
                state.userCreated = false;
                state.error = action.payload || 'Signup failed'; // Store the error message
            })

            // Handle logoutUser actions
            .addCase(logoutUser.pending, (state) => {
                state.loading = true;
                state.message = '';
                state.showMessage = false;
            })
            .addCase(logoutUser.fulfilled, (state, action) => {
                state.isAuthenticated = false;
                state.token = '';
                state.auth = '';
                state.message = action.payload;
                state.showMessage = false;
                state.loading = false;
                toast.success(action.payload);
            })
            .addCase(logoutUser.rejected, (state, action) => {
                state.loading = false;
                state.message = action.payload || ''; // Set message from error
                state.showMessage = true; // Show message on failure
                toast.error(action.payload || 'Logout failed');
            });
    },
});

export default authSlice.reducer;
