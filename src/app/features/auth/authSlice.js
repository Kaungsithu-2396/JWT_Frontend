import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { authService } from "./authService";
//get user from localStorage
const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
    user: user ? user : null,
    isLoading: false,
    isError: false,
    isSuccess: false,
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
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        resetInfo: (state) => {
            state.isError = false;
            (state.isLoading = false),
                (state.isSuccess = false),
                (state.message = "");
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.isError = false;
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.user = action.payload;
                (state.isError = false),
                    (state.isLoading = false),
                    (state.isSuccess = true);
            })
            .addCase(registerUser.rejected, (state, action) => {
                (state.isError = true),
                    (state.isSuccess = false),
                    (state.isLoading = false),
                    (state.user = null),
                    (state.message = action.payload);
            });
    },
});
export const { resetInfo } = authSlice.actions;
export default authSlice.reducer;
