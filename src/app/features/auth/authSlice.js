import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: "",
};
export const registerUser = createAsyncThunk(
    "auth/register",
    async (user, Thunk_API) => {
        try {
            return await authService.register(user);
        } catch (error) {
            const message = error.response.data.message;
            return Thunk_API.rejectWithValue(message);
        }
    }
);
export const logoutUser = createAsyncThunk("auth/logout", async () => {
    return await authService.logout();
});
export const login = createAsyncThunk("auth/login", async (user, Thunk_API) => {
    try {
        return await authService.loginUser(user);
    } catch (error) {
        const message = error.response.data.message;
        return Thunk_API.rejectWithValue(message);
    }
});
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetInfo: (state) => {
            state.isError = false;
            state.isSuccess = false;
            state.isLoading = false;
            state.message = "";
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isSuccess = true;
                state.isError = false;
                state.isLoading = false;
                state.user = action.payload;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                state.user = null;
            })
            .addCase(logoutUser.fulfilled, (state) => {
                state.user = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload;
                state.isLoading = false;
                state.isSuccess = true;
                state.isError = false;
            })
            .addCase(login.rejected, (state, action) => {
                state.isError = true;
                state.isSuccess = false;
                state.message = action.payload;
                state.user = null;
            });
    },
});
export const { resetInfo } = authSlice.actions;
export default authSlice.reducer;
