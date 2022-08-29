import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'login',
    initialState: {token: '', isLoggedIn: false},
    reducers: {
        login: (state, action) => {
            return {token: action.payload.token, isLoggedIn: true};
        },
        logout: (state, action) => {
            return {token: '', isLoggedIn: false}
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
