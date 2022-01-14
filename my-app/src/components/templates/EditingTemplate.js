import React, {Component} from "react";
import {ThemeContextConsumer} from "../../components/ThemeContext";

class EditingTemplate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            newName: "",
        }
    }

    newNameHandler(e) {
        this.setState({
            newName: e.target.value
        })
    }

    render() {
        return (
            <>
                <ThemeContextConsumer>
                    {context => (
                        <form className="stack-small" onSubmit={(e) => e.preventDefault()}>
                            <div className="form-group">
                                <label className="todo-label" htmlFor={this.props.id}>
                                    New name for {this.props.name}
                                </label>
                                <input
                                    onInput={(event) => this.newNameHandler.call(this, event)}
                                    value={this.state.newName}
                                    id={this.props.id}
                                    className="todo-text"
                                    type="text"/>
                            </div>
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className={`btn todo-cancel ${context.theme}`}
                                    onClick={() => this.props.setEditing(this.props.id, false)}
                                >
                                    Cancel
                                    <span className="visually-hidden">renaming {this.props.name}</span>
                                </button>
                                <button onClick={() => this.props.editTask(this.props.id, this.state.newName)}
                                        className="btn btn__primary todo-edit">
                                    Save
                                    <span className="visually-hidden">new name for {this.props.name}</span>
                                </button>
                            </div>
                        </form>
                    )}
                </ThemeContextConsumer>
            </>
        )
    }
}

export default EditingTemplate