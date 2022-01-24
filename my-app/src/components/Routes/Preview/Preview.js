import React from "react";
import {Outlet, Link} from 'react-router-dom';

const Preview = (props) => {
    return (
        <>
            <Link to="/App">
                <button
                    type="button"
                    className="btn toggle-btn"
                >
                    Checkout App
                </button>
            </Link>
            <Outlet/>
        </>
    );
}

export default Preview;