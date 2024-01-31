import {createSlice} from '@reduxjs/toolkit'

const initialState =  {
    loginStatus: localStorage.getItem('userId') != null,
    userId : localStorage.getItem('userId') || null,
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action) => {
            state.loginStatus = true;
            state.userId = action.payload.userId;
            localStorage.setItem('userId', action.payload.userId);
        },

        logout:(state) => {
            state.loginStatus = false;
            state.userId = null;
            localStorage.removeItem('userId');
        }

    }
});

export const {login, logout} = authSlice.actions;
export default authSlice.reducer;