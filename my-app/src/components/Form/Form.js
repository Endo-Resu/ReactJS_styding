import React, { useState } from "react";
import Notification from "../Notification/Notification";

const Form = (props) => {

    const [name, setName] = useState('');
    const [notificationActive, setNotificationActive] = useState(false);


    const handleChange = (e) => {
        setName(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask(name);
        setName("");
    }

    return (
        <form onSubmit={handleSubmit}>
            <Notification
                active={notificationActive} setActive={setNotificationActive}/>
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
                    onClick={setNotificationActive}
            >
                Add
            </button>
        </form>
    );
}

export default Form;