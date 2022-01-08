import React, { useState } from "react";

const Notification = ({active, setActive}) => {
    return (
        <div className={active ? "notification-holder active" : "notification-holder"} onClick={() => setActive(false)}>
            <div className="notification-holder__content" onClick={e => e.stopPropagation()}>

            </div>
        </div>
    );
}

export default Notification
