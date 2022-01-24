import React from "react";
import { Outlet, Link } from 'react-router-dom';

const Preview = (props) => {
    return (
        <>
        <Link to="/App">App
            </Link>
        <Outlet />
        </>
    );
}

export default Preview;