import React, {Component} from "react";
import LoadingHOC from "./HOC/LoadingHOC";

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            completed: false,
        }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                loading: true,
                completed: true
            })
        }, 100000000)
    }

    render() {
        return (
            <>
                {!this.state.completed ? (
                    <>
                        {!this.state.loading ? (
                            <div className="spinner">
                                <div className="half-spinner">

                                </div>
                            </div>
                        ) : null}
                    </>
                ) : null
                }
            </>
        );
    }
}

export default LoadingHOC(Loader)