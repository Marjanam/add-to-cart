import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value
    // imageUrl: "https://picsum.photos/200",
    // tags: ["tag1", "tag2", "tag3", "tag4"],
    // needToLearn: ["redux", "javascript", "css"],
    // fruits: [], //"grape", "apple", "humus"],
    // furniture: ["chair", "table", "almirah"]
  };
  //helper method for rendering if else statement
  // renderFruits() {
  //   if (this.state.fruits.length === 0)
  //     return <p>There are no fruits in the cart!</p>;
  //   return (
  //     <ul>
  //       {this.state.fruits.map(fruit => (
  //         <li key={fruit}>{fruit}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  // renderFurniture() {
  //   if (this.state.furniture.length === 0)
  //     return <p>Furnitures are not in the list!</p>;
  //   return (
  //     <ul>
  //       {this.state.furniture.map(furniture => (
  //         <li key={furniture}>{furniture}</li>
  //       ))}
  //     </ul>
  //   );
  // }
  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <span style={{ fontSize: 30 }} className={this.newMethod()}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.handleIncrement()}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        {/* <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul> */}
        {/* <ul>
          {this.state.needToLearn.map(needToLearn => (
            <li key={needToLearn}>{needToLearn}</li>
          ))}
        </ul>
        <div>
          {this.state.fruits.length === 0 && "please select fruits"}
          {this.renderFruits()}
        </div>
        <div>{this.renderFurniture()}</div> */}
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <div />
      </div>
    );
  }
  newMethod() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value } = this.state;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
