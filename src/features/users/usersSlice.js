import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: nanoid(), name: 'Jahred Wire'
    },
    {
        id: nanoid(), name: 'Marri Joana'
    },
    {
        id: nanoid(), name: 'Vulpes Score'
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