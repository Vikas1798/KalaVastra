import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:[],
    reducers:{
        addUser(state, action){},
        removeUser(state, action){},
        ClearAllUser(state, action){},
    }
})

export default userSlice.reducer;
export const { addUser, removeUser, ClearAllUser} = userSlice.actions;