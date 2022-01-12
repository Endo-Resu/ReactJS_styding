import React, { Component } from "react";
import EditingTemplate from "./templates/editingTemplate";
import ViewTemplate from "./templates/viewTemplate";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            isEditing: this.props.isEditing,
            newName: '',
        }

    }

    newNameHandler(e) {
        this.setState({
            newName: e.target.value
        })
    }

    render() {
       return (
            <li className="todo">{this.props.isEditing} ? <EditingTemplate /> : <ViewTemplate /></li>
        );
    }
}

export default Todo;
