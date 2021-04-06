import React, { useEffect } from 'react';
import Header from './container/Header';
import Menu from './components/Menu';
import Project from "./container/Projects";
import About from "./container/About";
import AOS from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos";
import { theme } from './core/theme';
import Contacts from './container/Contacts';


const App: React.FC = () => {
  useEffect(() => {
    AOS.init();
    document.body.style.margin = "0px";
  }, [])

  return (
    <div className = 'main' style={{margin: 0, padding: 0, backgroundColor: theme.colors?.background}}>
      <Menu navs={['Home', 'About', 'Contacts']} />
      <Header />
      <Project />
      <About />
      <Contacts />
    </div>
  );
}

export default App;