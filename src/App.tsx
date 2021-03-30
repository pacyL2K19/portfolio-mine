import React from 'react';
import Header from './container/Header';
import Project from "./container/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos";

class App extends React.Component {
  componentWillMount () {
    AOS.init();
    document.body.style.margin = "0px";
  }
  render () {
    return (
      <div className = 'main' style={{margin: 0, padding: 0}}>
        <Header />
        <Project />
      </div>
    );
  }
}

export default App;