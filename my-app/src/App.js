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
            isEditing: false,
            tasks: [],
            filterType: 'All',
        };
    }

    addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        this.state.tasks.push(newTask);
        this.setState({
            tasks: this.state.tasks
        });
    }

    setFilter(filterName) { 
        this.setState({
            filterType: filterName,
        })
    }

    setEditing(value) {
        this.setState({
            isEditing: value,
        })
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
        this.setState({
            tasks: editedTaskList,
            isEditing: false,
        });
    }
    tasksWasFilter() {
        return this.state.tasks.filter(task => {
                          
            if (this.state.filterType === 'Completed' && task.completed) {
                return task
            } else if (this.state.filterType === "Active" && !task.completed) {
                return task
            } else if (this.state.filterType === 'All') {
                return task
            }
        })
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
                            setFilter={this.setFilter.bind(this)}
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
                    {this.tasksWasFilter().map(task => {
                            return (
                                <Todo
                                    id={task.id}
                                    name={task.name}
                                    completed={task.completed}
                                    key={task.id}
                                    setEditing={this.setEditing.bind(this)}
                                    isEditing={this.state.isEditing}
                                    toggleTaskCompleted={this.toggleTaskCompleted.bind(this)}
                                    deleteTask={this.deleteTask.bind(this)}
                                    editTask={this.editTask.bind(this)}
                                />
                            )
                    })}
                </ul>
            </div>
        )
    }
}

export default App;