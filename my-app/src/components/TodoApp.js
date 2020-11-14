import React from "react";
import "./TodoApp.css";
class TodoApp extends React.Component {
    state = {
        input: "",
        items : []
    }

    storeItems = (event) => {
        event.preventDefault();
        const { input } = this.state;
        
        this.setState({
            items : [...this.state.items, input]
        })
    } 

    handleChange = (event) => {
        this.setState({
            input: event.target.value
        })
    };

    deleteItem = (key) => {
        const allItems = this.state.items
        allItems.splice(key, 1)

        this.setState({
            items:allItems
        })
    }
    render() {

        const { input } = this.state
        console.log(this.state.items)

        return (
          <div className="TodoApp todo-container">
            <form className="input-section" onSubmit={this.storeItems}>
              <h1>TodoApp</h1>
              <input
                type="text"
                value={input}
                onChange={this.handleChange}
                placeholder="enter items"
              />
            </form>
            <ul>
              {
                this.state.items.map((data, index) => (
                  <li key={index}>
                    {data} <i className="fa fa-trash" aria-hidden="true" onClick={()=>this.deleteItem(index)}></i>
                  </li>
                ))}
            </ul>
          </div>
        );
    }
}

export default TodoApp;
