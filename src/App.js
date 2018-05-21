import React, { Component } from 'react';
import Signin from "./components/Signin";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div className="main">
          <Header/>
          <Signin/>
      </div>
    );
  }
}

export default App;
