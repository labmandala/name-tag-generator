import React, { Component } from "react";

class UserInput extends Component {

  state = {
    name: ""
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          type="text" 
          placeholder="Add a new name here..." 
          value={this.state.name}
          />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
