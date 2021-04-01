import React from 'react';
import Header from './container/Header';
import Menu from './components/Menu';
import Project from "./container/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos";
import { theme } from './core/theme';

class App extends React.Component {
  componentWillMount () {
    AOS.init();
    document.body.style.margin = "0px";
  }
  render () {
    return (
      <div className = 'main' style={{margin: 0, padding: 0, backgroundColor: theme.colors?.background}}>
        <Menu navs={['Home', 'About', 'Contacts']} />
        <Header />
        <Project />
      </div>
    );
  }
}

export default App;