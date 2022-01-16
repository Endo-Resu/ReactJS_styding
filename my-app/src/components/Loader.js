import React, {Component} from "react";
import LoadingHOC from "./HOC/LoadingHOC";

class Loader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            completed: true,
        }
    }

    render() {
        console.log(this)
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