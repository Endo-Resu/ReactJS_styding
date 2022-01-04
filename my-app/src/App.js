import React, { Component } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo"
import { nanoid } from "nanoid";

const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed,
};

const FILTER_NAMES = Object.keys(FILTER_MAP);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        tasks: this.props.tasks,
            filter: 'All'
        };
    }

    addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        this.state.tasks.push(newTask);
        this.setState({
            tasks: this.props.tasks
        });
    }

    toggleTaskCompleted(id) {
        const updatedTasks = this.state.tasks.map(task => {
            if (id === task.id) {
                return {...task, completed: !task.completed}
            }
            return task;
        });
        this.setState({
            tasks: updatedTasks
        });
    }

    deleteTask(id) {
        const remainingTasks = this.state.tasks.filter(task => id !== task.id);
        this.setState({
            tasks: remainingTasks
        });
    }

    editTask(id, newName) {
        const editedTaskList = this.state.tasks.map(task => {
            if (id === task.id) {
                return {...task, name: newName}
            }
            return task;
        });
        this.state.tasks.push(editedTaskList)
        this.setState({
            tasks: editedTaskList
        });
    }

    render() {
        this.tasksNoun = this.state.tasks.length !== 1 ? 'tasks' : 'task';
        this.headingText = `${this.state.tasks.length} ${this.tasksNoun} remaining`;
        return (
            <div className="todoapp stack-large">
                <h1>ToDo App</h1>
                <Form addTask={this.addTask.bind(this)}/>
                <div className="filters btn-group stack-exception">
                    {FILTER_NAMES.map(name => (
                        <FilterButton
                            key={name}
                            name={name}
                            isPressed={name === this.props.filter}
                            setFilter={this.props.setFilter}
                        />
                    ))}
                </div>
                <h2 id="list-heading">
                    {this.headingText}
                </h2>
                <ul
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                >
                    {this.state.tasks.map(task => (
                        <Todo
                            id={task.id}
                            name={task.name}
                            completed={task.completed}
                            key={task.id}
                            toggleTaskCompleted={this.toggleTaskCompleted.bind(this)}
                            deleteTask={this.deleteTask.bind(this)}
                            editTask={this.editTask.bind(this)}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default App;