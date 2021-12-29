import React, { useState } from "react";
import {hover} from "@testing-library/user-event/dist/hover";

const App = () => {
    const [bg, setBg, setFilter, setWidth, setHeight] = useState("#fafafa");

    const appStyles = {
        height: "1440px",
        background: `${bg}`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };

    const initialStyle = {
        width: "300px",
        height: "400px",
        fontSize: "25px",
        borderRadius: "12px",
        border: "1px transparent",
        color: "#000000",
        filter: "blur(0)",
        backgroundImage: `url(https://i.redd.it/qkpntrbcsrd41.jpg)`,
    };

    const handleHover = (backgroundImage, filter) => {
        setBg(backgroundImage);
        setFilter(filter);
    };

    const handleClick = (width, height) => {
        setWidth(width);
        setHeight(height);
    };

    return (
        <div style={appStyles}>
            <button
                style={initialStyle}
                onMouseEnter={() => handleHover(`url(https://i.pinimg.com/originals/cf/da/3c/cfda3c9030bc6706e4c3509582e19526.jpg)`, "blur(4px)")}
                onMouseLeave={() => handleHover("#fafafa")}
                onClick={() => handleClick("600px", "800px")}
            >
                {" "}
                Hover and Click
            </button>
        </div>
    );
}

export default App;