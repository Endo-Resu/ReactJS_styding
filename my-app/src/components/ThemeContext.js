import React, { Component } from "react";
import PropTypes from "prop-types";
const { Provider, Consumer } = React.createContext("light");

class ThemeContextProvider extends Component {
    state = {
        theme: "light"
    };

    toggleTheme = () => {
        this.setState(prevState => {
            return {
                theme: prevState.theme === "light" ? "dark" : "light"
            };
        });
    };

    render() {
        return (
            <Provider
                value={{ theme: this.state.theme, toggleTheme: this.toggleTheme }}
            >
                {this.props.children}
            </Provider>
        );
    }
}

ThemeContextProvider.propTypes = {
    children: PropTypes.object,
}

export { ThemeContextProvider, Consumer as ThemeContextConsumer };