import "./App.css";
import { Component } from "react";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import Home from "./Components/Home";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Experience from "./Components/Experience";
import Languages from "./Components/Languages";
import TechLanguages from "./Components/TechLanguages";
import Contact from "./Components/Contact";
import Footer from './Components/Footer';

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
      <div className="App">
        <Home content={this.state.data} />
        <Education content={this.state.data}></Education>
        <Skills content={this.state.data}></Skills>
        <Experience content={this.state.data}></Experience>
        <Languages content={this.state.data}></Languages>
        <TechLanguages content={this.state.data}></TechLanguages>
        <Contact content={this.state.data}></Contact>
        <Footer content={this.state.data}></Footer>
      </div>
    );
  }
}

export default App;
