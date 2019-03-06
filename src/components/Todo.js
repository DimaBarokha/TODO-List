import React, {Component} from "react";
import Checkbox from "./Checkbox";
import Button from "./Button"

class Todo extends Component {
    render() {
        return (
            <div className={`todo${this.props.completed ? ' completed' : ''}`}>
                <Checkbox checked={this.props.completed}
                          onChange={
                              () => this.props.onStatusChange(this.props.id)
                          }
                />
                <span className="todo-title">{this.props.title}</span>
                <Button className="delete icon" icon="delete" onClick={() => this.props.onDelete(this.props.id)}/>
            </div>
        );
    }
}

export default Todo;
