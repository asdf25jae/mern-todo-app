import React, { Component } from "react"; // import React, and Component class
import "bootstrap/dist/css/bootstrap.min.css"; // imports bootstrap into play
import { BrowserRouter as Router, Route, Link } from "react-router-dom"; 

// note that App.js is the entry point for the entire react application


class App extends Component {
  render() {
    return (
      <Router>
        <Route path="/" exact component = { TodosList } />
        <Route path="/edit/:id" component = { EditTodo } />
        <Route path="/create" component= { CreateTodo } />
        <div className="container">
          <h2>MERN-Stack Todo App</h2>
        </div>
      </Router>
    );
  }
}

export default App;