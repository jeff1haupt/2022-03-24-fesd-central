import React, { Component } from "react";

export default class Sample extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: []
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then( res => res.json() )
        .then(res => {
            this.setState({
                isLoaded: true,
                items: res
            });
        },
        error => {
            this.setState({
                isLoaded: true,
                error
            });
        }
      );
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.username}>
              {item.username}: {item.name}
            </li>
          ))}
        </ul>
      );
    }
  }
}