import React, { Component } from "react";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import Todo from "./components/Todo"
import { nanoid } from "nanoid";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tasks: this.props.tasks
        };
    }

    componentDidMount() {
        this.setState({
            tasks: this.props.tasks
        });
    }

    addTask(name) {
        const newTask = { id: "todo-" + nanoid(), name: name, completed: false };
        this.state.tasks.push(newTask);
        this.setState({
            tasks: this.state.tasks
        });
    }

    render() {
        return (
            <div className="todoapp stack-large">
                <h1>ToDo App</h1>
                <Form addTask={this.addTask.bind(this)}/>
                <div className="filters btn-group stack-exception">
                    <FilterButton />
                    <FilterButton />
                    <FilterButton />
                </div>
                <h2 id="list-heading">{this.headingText}</h2>
                <ul
                    className="todo-list stack-large stack-exception"
                    aria-labelledby="list-heading"
                >
                    {this.state.tasks.reverse().map(task => (
                        <Todo
                            id={task.id}
                            name={task.name}
                            completed={task.completed}
                            key={task.id}
                        />
                    ))}
                </ul>
            </div>
        )
    }
}

export default App;