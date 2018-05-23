import React, {Component} from 'react';
import { login } from "../actions/index";
import {connect} from "react-redux";
//import HomePage from "./HomePage";
//import { login } from "./../actions/index";

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
        //console.log(user);
        this.props.login(user);
        /*this.setState({
            email: '',
            password: ''
        });*/
    }
    render() {

        return (
            <div>
                <div className="App">
                    <form onSubmit={(e) => {this.handleSubmit(e)}}>
                        <h2 className="labelName">
                         Sign in to Apple Store
                        </h2>
                        <input type="text" id="uname" name="username" placeholder="Apple Id" value={this.state.userId} onChange={userId => {this.handleUserId(userId)}} />
                        <input type="password" id="pwd" name="password" placeholder="Password" value={this.state.password} onChange={pwd => {this.handlePassword(pwd)}}/>
                        <button className="btn btn-success btn-sm w-100" >
                            Sign in to Apple Store</button>
                    </form>
                </div>
                    <div className="message">
                        {this.props.isLoginSuccess}
                        { this.props.isLoginPending && <div>Please wait...</div> }
                        { this.props.isLoginSuccess && <div>Success.</div> }
                        { /*this.props.state.loginError && <div>{loginError.message}</div> */}
                        </div>
            </div>
    );
    }
    }
function mapDispatchToProps(dispatch) {
    return {
        login: (user) => dispatch(login(user))
    };
}
function mapStateToProps(currentState) {
    return currentState;
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);