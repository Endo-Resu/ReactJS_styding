import { createSlice } from "@reduxjs/toolkit";

export const TodoSlice = createSlice({
    name: "todo",
    initialState: null,
    reducers: {
        setNewName(state, action) {
            state.value = action
        }
     }
});

// Action creators are generated for each case reducer function
export const { setNewName } = TodoSlice.actions;

export default TodoSlice.reducer;