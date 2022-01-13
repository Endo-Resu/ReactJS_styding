import React, { Component } from 'react';

const {Provider, Consumer} = React.createContext();

class ThemeContextProvider extends Component {
    state = {
        themeName: "light"
    };

    toggleTheme = () => {
        this.setState(prevState => {
            return {themeName: prevState.themeName === "light" ? "dark" : "light"}}
        );
    };

    render() {
        const value = {
            themeName: this.state.themeName,
            toggleTheme: this.toggleTheme
        }
        return (
            <Provider value={value}>
                {this.props.children}
            </Provider>
        );
    }
}

export {ThemeContextProvider, Consumer as ThemeContextConsumer};
