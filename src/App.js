import React, {Component} from "react";
import todosArray from "./todosArray";
import Header from "./components/Header";
import Todo from "./components/Todo";
import Form from "./components/Form";
import "./scss/style.scss";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {items: todosArray};
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }

    handleStatusChange(id) {
        let resultList = this.state.items.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({items: resultList});
    }

    handleDelete(id) {
        console.log(id);
        let resultList = this.state.items.filter(todo => todo.id !== id);
        this.setState({items: resultList});
        console.log(resultList);
    }

    nextId() {
        this._nextId = this._nextId || 4;

        return this._nextId++;
    }

    handleAdd(title) {
        let todo = {
            id: this.nextId(),
            title,
            completed: false
        };
        let todos = [...this.state.items, todo];
        console.log(todos);
        this.setState({items: todos});
    }

    handleEdit(id, title) {
        let todos = this.state.items.map(todo => {
            if (todo.id === id) {
                todo.title = title;
            }
            return todo;
        });
        this.setState({items: todos});
    }

    render() {
        return (
            <main>
                <Header title={this.props.title} todos={this.state.items}/>
                <section className="todo-list">
                    {this.state.items.map(todo => (
                        <Todo
                            key={todo.id}
                            id={todo.id}
                            title={todo.title}
                            completed={todo.completed}
                            onStatusChange={this.handleStatusChange}
                            onDelete={this.handleDelete}
                            onEdit={this.handleEdit}
                        />
                    ))}
                </section>
                <Form onAdd={this.handleAdd}/>
            </main>
        );
    }
}

export default App;
