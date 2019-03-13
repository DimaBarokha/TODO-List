import React, {Component} from "react";

class Button extends Component {
    render() {
        return (
            <button className={this.props.className} onClick={this.props.onClick} {...this.props}>
                {
                    this.props.icon ?
                        <i className="material-icons">{this.props.icon}</i>
                        :
                        this.props.children

                }
                <i className="material-icons">{this.props.icon}</i>
            </button>
        );
    }
}

export default Button;
