import NavBar from "./NavBar";
import { Component } from "react";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { body: "" };
  }

  componentDidMount() {
    this.setState({
      body: this.props.body,
    });
  }

  render() {
    return (
      <div>
        <NavBar tittle="Home" />
        <br/>
        <div className="Home">
          <h1 className="tittle">Haz sido logueado</h1>
        </div>
      </div>
    );
  }
}
