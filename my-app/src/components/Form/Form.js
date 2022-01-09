import React, { useState } from "react";
import Notification from "../Notification/Notification";

const Form = (props) => {
    const [name, setName] = useState('');
    const [notificationTitle, setNotificationTitle] = useState('')
    const [notificationActive, setNotificationActive] = useState(false);

    const handleChange = (e) => {
        setName(e.target.value);
    }

    const showNotification = (value) => {
        setNotificationActive(true)
        setNotificationTitle(value)
    }
    const hideNotification = () => {
        setNotificationActive(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.validateTask(name)) {
            props.addTask(name);
            setName("");
            showNotification('Task added successfully!')
        } else {
            showNotification('Allowed only unique tasks with 4+ symbols')
        }
      
    }

    return (
        <form onSubmit={handleSubmit}>
            {   
            notificationActive
                ?<Notification
                hideNotification={hideNotification}
                title={notificationTitle}
                active={notificationActive} setActive={setNotificationActive}/>
                : null
            }
            <h2 className="label-wrapper">
                <label htmlFor="new-todo-input" className="label__lg">
                    Got any doings?
                </label>
            </h2>
            <input
                type="text"
                id="new-todo-input"
                className="input input__lg"
                name="text"
                autoComplete="off"
                value={name}
                onChange={handleChange}
            />
            <button type="submit"
                    className="btn btn__primary btn__lg"
            >
                Add
            </button>
        </form>
    );
}

export default Form;