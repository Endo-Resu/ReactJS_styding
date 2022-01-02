import React, { Component } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo"

class App extends Component {
    constructor(props) {
        super(props);
        this.tasks = (this.props.tasks);
        this.taskList = this.tasks.map(task => (
            <Todo
                id={task.id}
                name={task.name}
                completed={task.completed}
                key={task.id}
            />
        ))
    }

    addTask(name) {
        const newTask = { id: "id", name: name, completed: false };
        setTasks([...this.tasks, newTask]);
    }

    render () {
        return (
            <div className="todoapp stack-large">
                <h1>TodoMatic</h1>
                <Form addTask={this.addTask} />
                <div className="filters btn-group stack-exception">
                    <FilterButton />
                    <FilterButton />
                    <FilterButton />
                </div>
                <h2 id="list-heading">3 tasks remaining</h2>
                <ul
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                >
                    {this.taskList}
                </ul>
            </div>
        )
    }
}

export default App;