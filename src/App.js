import "./App.css";

import React, { Component } from "react";

export class App extends Component {
  constructor() {
    super();
    this.showsPerson = this.showsPerson.bind(this);
    this.state = {
      Person: {
        fullName: "Radhi Aissa ",
        bio: `hi it's me again .`,
        imgSrc: "./me.jpg",
        profession: "none",
        interval: 0,
        shows: false,
      },
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        Person: {
          ...this.state.Person,
          interval: this.state.Person.interval + 1,
        },
      });
    }, 2000);
  }

  showsPerson() {
    this.setState({
      Person: { ...this.state.Person, shows: !this.state.Person.shows },
    });
  }

  getPersonProfile() {
    const isShown = this.state.Person.shows;
    if (isShown === true) {
      return (
        <div className=" wrapper">
          <div className="container">
            <h2 className="title"> {this.state.Person.fullName} </h2>
            <img className="img" src={this.state.Person.imgSrc} alt="" />
            <p className="info"> {this.state.Person.bio} </p>
            <h2 className="job"> {this.state.Person.profession} </h2>
          </div>
        </div>
      );
    }
    return "";
  }

  getToggler() {
    const isShown = this.state.Person.shows;
    if (isShown === true) {
      return " shown";
    }
    return " not Shown";
  }

  render() {
    return (
      <div className="wrapper2">
        {this.getPersonProfile()}
        <button className="button" type="button" onClick={this.showsPerson}>
          {this.getToggler()}
        </button>
        <p className="timer">{this.state.Person.interval}</p>
      </div>
    );
  }
}

export default App;
