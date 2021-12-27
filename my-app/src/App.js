import './App.css';
import { Fragment, Component } from 'react';
import ConditionalClass from "./components/conditional_class/Conditional_Class";
import ConditionalFunc from "./components/conditional_func/Conditional_Func";

class App extends Component {
    render() {
        return (
            <>
                <ConditionalFunc/>
                <ConditionalClass/>
            </>
        );
    };
};

export default App