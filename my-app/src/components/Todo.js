import React, { Component } from "react";
import EditingTemplate from "./templates/EditingTemplate";
import ViewTemplate from "./templates/ViewTemplate";
import PropTypes from "prop-types";

class Todo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            isEditing: this.props.isEditing,
            newName: "",
        }
    }
    
    render() {
        return (
        <li className="todo"> {
            this.props.isEditing
                ?
                <EditingTemplate
                    id={this.props.id}
                    editTask={this.props.editTask}
                    complited={this.props.completed}
                    name={this.props.name}
                    setEditing={this.props.setEditing}
                    toggleTaskCompleted={this.props.toggleTaskCompleted}
                />
                :
                <ViewTemplate
                    toggleTaskCompleted={this.props.toggleTaskCompleted}
                    name={this.props.name}
                    setEditing={this.props.setEditing}
                    deleteTask={this.props.deleteTask}
                    id={this.props.id}
                    complited={this.props.completed}
                />}
        </li>
    );
    }
}

Todo.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    editTask: PropTypes.func,
    completed: PropTypes.bool,
    setEditing: PropTypes.func,
    toggleTaskCompleted: PropTypes.func,
    deleteTask: PropTypes.func,
}

export default Todo;