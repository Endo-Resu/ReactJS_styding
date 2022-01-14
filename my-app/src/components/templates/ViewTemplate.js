import React, {Component} from "react";
import {ThemeContextConsumer} from "../../components/ThemeContext";

class ViewTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            name: this.props.name,
            isEditing: this.props.isEditing,
        }
    }

    render() {
        return (
            <>
                <ThemeContextConsumer>
                    {context => (
                        <div className="stack-small">
                            <div className="c-cb">
                                <input
                                    id={this.props.id}
                                    type="checkbox"
                                    defaultChecked={this.props.completed}
                                    onChange={() => this.props.toggleTaskCompleted(this.props.id)}
                                />
                                <label className="todo-label" htmlFor={this.props.id}>
                                    {this.props.name}
                                </label>
                            </div>
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className={`btn ${context.theme}`}
                                    onClick={() => this.props.setEditing(this.props.id, true)}
                                >
                                    Edit <span className="visually-hidden">{this.props.name}</span>
                                </button>
                                <button
                                    type="button"
                                    className="btn btn__danger"
                                    onClick={() => this.props.deleteTask(this.props.id)}
                                >
                                    Delete <span className="visually-hidden">{this.props.name}</span>
                                </button>
                            </div>
                        </div>
                    )}
                </ThemeContextConsumer>
            </>
        )
    }
}

export default ViewTemplate