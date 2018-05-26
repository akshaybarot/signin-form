import React, {Component} from 'react';
import { connect } from 'react-redux';
import '../App.css';
import {Link } from 'react-router-dom';
import Header from "./Header";
// import Signin from "./Signin";

class MainPage extends Component{
    render(){
        console.log(this.props.currentUser);
        return(

          <div className="Mainpage">
              <Header/>
              <h1><Link to='/'> <i class="fas fa-user-tie"></i></Link> Hi, This is {this.props.currentUser.username}</h1>

          </div>


        );
    }
}

function mapStateToProps(user) {

    return user;
}
export default connect(mapStateToProps)(MainPage);