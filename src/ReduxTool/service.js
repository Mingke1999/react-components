import { createSlice } from "@reduxjs/toolkit";

//create reducer
export const serviceSlice = createSlice({
    name:"service",
    initState:{
        serviceId:0
    },
    reducers:{
        increment:state=>{
            state.value += 1
        },
        decrement:state=>{
            state.value -= 1
        }
    }
})
//actions
export const {increment,decrement} = serviceSlice.actions
//export reducers
export default serviceSlice.reducer