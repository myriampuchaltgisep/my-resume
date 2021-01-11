import React, { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Home from "./Components/Home";
import Resume from "./Components/Resume";
import Container from "react-bootstrap/Container";

library.add(fab)

interface Props {}
class App extends Component<Props, any> {
  constructor(props: Props) {
    super(props);
    this.state = {
      data: {},
    };
  }

  componentDidMount() {
    this.getResume();
  }
  async getResume() {
    fetch("resume.json")
      .then((res) => res.json())
      .then((data) => this.setState({ data }));
  }
  render() {
    return (
      <Container fluid className="App">
        <Home content={this.state.data.home} />
        <Resume content={this.state.data.resume}></Resume>
      </Container>
    );
  }
}

export default App;
