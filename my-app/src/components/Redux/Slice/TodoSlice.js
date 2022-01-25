import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        newName: ''
    },
    reducers: {
        setNewName: (state, action) => {
            state.value = action.payload
        }
     }
});

export const { setNewName } = todoSlice.actions;

export default todoSlice.reducer;