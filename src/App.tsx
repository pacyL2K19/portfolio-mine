import React from 'react';
import Header from './container/Header';

class App extends React.Component {
  componentWillMount () {
    document.body.style.margin = "0px";
  }
  render () {
    return (
      <div className = 'main' style={{margin: 0, padding: 0}}>
        <Header />
      </div>
    );
  }
}

export default App;