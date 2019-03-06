import React, {Component} from "react";
import "./scss/style.scss";
import todosArray from "./todosArray"
import Header from "./components/Header";
import Todo from "./components/Todo";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleStatusChange(id) {
        todosArray.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });

        this.setState({todosArray});
    }

    handleDelete(id) {
        console.log(id);
        todosArray.filter(todo => todo.id !== id);
        this.setState({todosArray});
        console.log(todosArray)
    }

    render() {
        return (
            <main>
                <Header title={this.props.title}/>
                <section className="todo-list">
                    {
                        todosArray.map(todo =>
                            < Todo
                                key={todo.id}
                                id={todo.id}
                                title={todo.title}
                                completed={todo.completed}
                                onStatusChange={this.handleStatusChange}
                                onDelete={this.handleDelete}
                            />
                        )
                    }
                </section>
            </main>
        );
    }
}

export default App;
