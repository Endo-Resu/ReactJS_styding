import React, { Component } from "react";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            isEditing: this.props.isEditing
        }
    }

    render() {
        const editingTemplate = (
            <div>
                <form className="stack-small">
                    <div className="form-group">
                        <label className="todo-label" htmlFor={this.props.id}>
                            New name for {this.props.name}
                        </label>
                        <input id={this.props.id} className="todo-text" type="text" />
                    </div>
                    <div className="btn-group">
                        <button
                            type="button"
                            className="btn todo-cancel"
                            onClick={() => this.props.setEditing(this.props.isEditing)}
                        >
                            Cancel
                            <span className="visually-hidden">renaming {this.props.name}</span>
                        </button>
                        <button type="submit" className="btn btn__primary todo-edit">
                            Save
                            <span className="visually-hidden">new name for {this.props.name}</span>
                        </button>
                    </div>
                </form>
            </div>
        );

        const viewTemplate = (
            <div>
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
                            className="btn"
                            onClick={() => this.props.editTask(this.props.id)}
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
            </div>
        );

        return (
            <li className="todo">{this.isEditing ? editingTemplate : viewTemplate}</li>
        );
    }
}

export default Todo;
