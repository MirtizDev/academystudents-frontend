import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoggedIn : false,
    loginData:{
        email:"",
        password:""
    },
    registerData:{
        fullname:"",
        username:"",
        email:"",
        password:""
    },
    exactUsername:"",
    email:""
}

const auth = createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state) => {
            state.isLoggedIn = true
        },
        logout:(state) => {
            state.isLoggedIn = false
            state.loginData.email = ""
            state.loginData.password = ""
            state.exactUsername = ""
        },
        setLoginData: (state, action) => {
            state.loginData.email = action.payload.email;
            state.loginData.password = action.payload.password;
        },
        setRegisterData : (state,action) => {
            state.registerData = action.payload
        },
        setExactUsername : (state,action) => {
            state.exactUsername = action.payload
        },
        setEmail : (state,action) => {
            state.email = action.payload
        }
    }
})

export const {login,logout,setLoginData,setRegisterData,setExactUsername,setEmail} = auth.actions;
export default auth.reducer