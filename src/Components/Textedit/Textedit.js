import { Component } from "react";
import "./Textedit.css";

class text extends Component {
  state = {};
  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleChange} />
        <h3 className="joke"> {this.state.name}</h3>
        <button>submit</button>
        <img
          src="https://www.tjtoday.org/wp-content/uploads/2021/01/IMG_7501.jpg"
          alt="logosponge"
        />
      </div>
    );
  }
}

export default text;
