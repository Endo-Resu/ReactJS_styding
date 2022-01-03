import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id
        }
    }
    render() {
        return (
            <li className="todo stack-small">
                <div className="c-cb">
                    <input
                        id={this.props.id}
                        type="checkbox"
                        defaultChecked={this.props.completed}
                        onChange={() => this.props.toggleTaskCompleted.bind(this.props.id)}
                    />
                    <label className="todo-label" htmlFor={this.props.id}>
                        {this.props.name}
                    </label>
                </div>
                <div className="btn-group">
                    <button type="button" className="btn">
                        Edit <span className="visually-hidden">{this.props.name}</span>
                    </button>
                    <button
                        type="button"
                        className="btn btn__danger"
                        onClick={() => this.props.deleteTask.bind(this.props.id)}
                    >
                        Delete <span className="visually-hidden">{this.props.name}</span>
                    </button>
                </div>
            </li>
        );
    }
}

export default Todo;
