import React, { Component } from "react";
import "./scss/style.scss";

class App extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <main>
          <header>
              <h1>{this.props.title}</h1>
          </header>
          <section className="todo-list">
              <div className="todo completed">
                  <button className="checkbox icon">
                      <i className="material-icons">check_box</i>
                  </button>
                  <span className="todo-title">
                        Изучить JavaScript с Николаем
                  </span>
                  <button className="delete icon">
                      <i className="material-icons">delete</i>
                  </button>
              </div>
              <div className="todo">
                  <button className="checkbox icon">
                      <i className="material-icons">check_box_outline_blank</i>
                  </button>
                  <span className="todo-title">
                        Изучить реакт
                  </span>
                  <button className="delete icon">
                      <i className="material-icons">delete</i>
                  </button>
              </div>

          </section>
      </main>
    );
  }
}

export default App;
