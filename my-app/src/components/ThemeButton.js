import React, {Component} from "react";
import {ThemeContextConsumer} from "./ThemeContext";

class ThemeButton extends Component {

    render() {
        return (
            <ThemeContextConsumer>
                {context => (
                    <button
                        type="button"
                        className="btn toggle-btn theme-btn"
                        onClick={context.toggleTheme}
                    >
                        <span>Switch Theme</span>
                    </button>
                )}
            </ThemeContextConsumer>
        );
    }
}

export default ThemeButton;