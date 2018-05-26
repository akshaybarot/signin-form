import React, { Component } from 'react';
import Signin from "./components/Signin";
import Header from "./components/Header";
import { BrowserRouter, Route } from 'react-router-dom';
import MainPage from "./components/MainPage";



class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="main">

                {/*<Header/>*/}
                <Route exact path="/" component={Signin}/>
                <Route exact path="/homePage" component={MainPage} />
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
