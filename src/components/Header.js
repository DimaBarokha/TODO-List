import React, {Component} from "react";
import Stats from "./Stats"
class Header extends Component {
    render() {
        return (
            <header>
                <Stats todos={this.props.todos}/>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
}

export default Header;
