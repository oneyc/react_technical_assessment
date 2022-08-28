import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'login',
    initialState: {isLoggedIn: false},
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
        },
        logout: (state, action) => {
            state.isLoggedIn = false;
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
