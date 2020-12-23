import React, { Component } from "react";

export default class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { tittle: props.tittle };
  }

  /*     componentDidMount() {
        this.setState({
            tittle: this.props.tittle
        })
    } */

  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {this.state.tittle}
          </a>
        </div>
      </nav>
    );
  }
}
