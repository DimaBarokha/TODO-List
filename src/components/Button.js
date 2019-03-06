import React, {Component} from "react";

class Button extends Component {
    render() {
        return (
            <button className = {this.props.className} onClick={this.props.onClick}>
                <i className="material-icons">{this.props.icon}</i>
            </button>
        );
    }
}

export default Button;
