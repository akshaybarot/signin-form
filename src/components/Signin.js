import React, {Component} from 'react';
import { login } from "../actions/index";
import {connect} from "react-redux";
import { Redirect } from 'react-router-dom';
import Header from "./Header";
import './Signin.css';
//import '../Dummy.css';
import logo from '../images/Spinner-2.svg';

class Signin extends Component {
    constructor(){
        super();
        this.state={
            userId:"",
            password: "",
            currentUser: {
                id: '',
                password: '',
            }
        }
    }

    handleUserId(userId){
        this.setState({
            userId: userId.target.value,
            currentUser: {
                id: userId.target.value,
                password: this.state.currentUser.password,
            }
        })
    }

    handlePassword(pwd){
        this.setState({
            password: pwd.target.value,
            currentUser: {
                id: this.state.currentUser.id,
                password: pwd.target.value,
            }
        })
    }

    handleSubmit(e){
        e.preventDefault();
        let user = this.state.currentUser;
        console.log(this.props.credentials);
        let credential = this.props.credentials;
        console.log(credential);
        this.props.login(user, credential);
    }
    render() {

        return (
            <div className="main">

            <div className="app">
                <Header/>
                    <form onSubmit={(e) => {this.handleSubmit(e)}}>
                        <h2 className="labelName">
                         Sign in to Apple Store
                        </h2>
                        <input type="email" id="u name" name="username" placeholder="Apple Id" value={this.state.userId} onChange={userId => {this.handleUserId(userId)}} />
                        <input type="password" id="pwd" name="password" placeholder="Password" value={this.state.password} onChange={pwd => {this.handlePassword(pwd)}}/>
                        <button type="submit" className="btn btn-success btn-sm w-10">
                              <i className="fas fa-sign-in-alt"/>
                        </button>
                        <div>

                            {this.props.isLoginPending && <div>
                                <img src={logo} className="App-logo" alt="logo" />
                            </div>}
                            { this.props.loginError && <div className="Appcenter"><i className="far fa-times-circle"/> {this.props.loginError.message}</div> }

                            { this.props.isLoginSuccess && <Redirect from="/" to="/homePage" /> }

                        </div>
                    </form>
                </div>
            </div>
    );
    }
    }
function mapDispatchToProps(dispatch) {
    return {
        login: (user, credentials) => dispatch(login(user, credentials))
    };
}
function mapStateToProps(currentState) {
    return currentState;
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);