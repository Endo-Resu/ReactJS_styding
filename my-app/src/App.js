import React, { Component } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo"
import { nanoid } from "nanoid";
import FILTER_NAMES from "./utils/constants/Constants"

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: [],
            filterType: 'All',
        };
        this.setEditing = this.setEditing.bind(this)
        this.toggleTaskCompleted = this.toggleTaskCompleted.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.editTask = this.editTask.bind(this)
    }

    addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false, isEditing: false };
        this.setState({
            tasks: [...this.state.tasks, newTask]
        });
    }

    setFilter(filterName) { 
        this.setState({
            filterType: filterName,
        })
    }

    setEditing(taskId, value) {
        const newTasks = this.state.tasks.map(task => {
            if (task.id === taskId) {
                task.isEditing = value;
            }
            return task;
        })

        this.setState({
            tasks: newTasks
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
                task.name = newName;
                task.isEditing = false;
            }
            return task;
        });
        this.setState({
            tasks: editedTaskList,
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
        const tasksNoun = this.state.tasks.length !== 1 ? 'tasks' : 'task';
        const headingText = `${this.state.tasks.length} ${tasksNoun} remaining`;
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
                    {headingText}
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
                                    isEditing={task.isEditing}
                                    setEditing={this.setEditing}
                                    toggleTaskCompleted={this.toggleTaskCompleted}
                                    deleteTask={this.deleteTask}
                                    editTask={this.editTask}
                                />
                            )
                    })}
                </ul>
            </div>
        )
    }
}

export default App;