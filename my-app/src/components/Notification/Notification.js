import React, { useEffect, useState } from "react";

const Notification = (props) => {
    const { active, setActive } = props;
    const [showNotification, setShowNotification] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setShowNotification(false);
            props.hideNotification();
        }, 4000)
    }, [])
    return (
        <>
            {showNotification ? <div className={active ? "notification-holder active" : "notification-holder"} onClick={() => setActive(true)}>
                <div className="notification-holder__content">
                    {props.title}
                </div>
            </div> : <div className={"notification-holder"} />}
        </>

    );
}

export default Notification
