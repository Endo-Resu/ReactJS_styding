import {createSlice} from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        value: '',
        editing: false,
        notification: false,
        notificationText: ''
    },
    reducers: {
        setNewName: (state, action) => {
            state.value = action.payload
        },
        setEditing: state => {
            state.editing = !state.editing
        },
        setNotificationActive: state => {
            state.notification = !state.notification
        },
        setNotificationTitle: (state, action) => {
            state.notificationText = action.payload
        },
    }
});

export const {setNewName, setEditing, setNotificationTitle, setNotificationActive} = todoSlice.actions;
export const selectName = state => state.todo.value;
export const selectEditing = state => state.todo.editing;
export const selectNotification = state => state.todo.notification;
export const selectNotificationTitle = state => state.todo.notificationText;

export default todoSlice.reducer;