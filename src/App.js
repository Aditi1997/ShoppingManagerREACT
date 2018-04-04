import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Shopping from './Shopping';

class App extends Component {
  state= {
    list: [
      {
      "name": "Black-shirt",
      "qty": 2,
      "unitPrice": 1200
    },
    {
    "name": "Bag",
    "qty": 2,
    "unitPrice": 1000
  }
    ]
  }

  deleteItem = (item) => {
    this.setState((prevstate) => ({
      list: prevstate.list.filter((i) => i.name !== item.name)
    }))
  }

  addItem = (item) => {
    let joined = this.state.list.concat(item);
    console.log(joined)
    this.setState({ list: joined })
    }

  render() {
    return (
      <div className="App">
        <Shopping
          onAddItem={this.addItem}
          onDeleteItem={this.deleteItem}
          list={this.state.list} />
      </div>
    );
  }
}

export default App;
