import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 0, name: 'Jahred Wire'
    },
    {
        id: 1, name: 'Marri Joana'
    },
    {
        id: 2, name: 'Vulpes Score'
    },
    
];


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {

    }
});


export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer;