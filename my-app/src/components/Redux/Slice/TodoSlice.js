import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: ''
    },
    reducers: {
        setNewName: (state, action) => {
            state.value = action.payload
        }
     }
});

export const { setNewName } = todoSlice.actions;
export const selectCount = state => state.todo.value;

export default todoSlice.reducer;