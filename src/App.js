import React, { Component } from 'react';
import Signin from "./components/Signin";
import Header from "./components/Header";
import MainPage from "./components/MainPage";

// import HomePage from "./components/HomePage";


class App extends Component {
  render() {
    return (
            <div className="main">
                <Header/>
                <Signin/>
                <MainPage/>
           </div>
    );
  }
}

export default App;
