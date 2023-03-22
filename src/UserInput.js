import React, { Component } from "react";

class UserInput extends Component {
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Add a new name here..." />
        <input type="submit" value="Create Name Tag" />
      </form>
    );
  }
}

export default UserInput;
