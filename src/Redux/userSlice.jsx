import {createSlice} from "@reduxjs/toolkit"

const user=createSlice({
    name:"userInfo",
    initialState:{
        userData:null
    },
    reducers:{
        display:(state,action)=>{
            console.log("action values",action);
            
state.userData=action.payload
        }
    }
})

export const {display}=user.actions
export default user.reducer