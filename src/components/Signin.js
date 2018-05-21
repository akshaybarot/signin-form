import React, {Component} from 'react';
import { validateUser } from "../actions/index";
import {connect} from "react-redux";
import HomePage from "./HomePage";

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

    render() {
        console.log(this.props);

        return (
            <div>
                <div className="App">
                    <form onSubmit={() => {
                        this.props.validateUser(this.state.currentUser)}}>
                        <h2 className="labelName">
                         Sign in to Apple Store
                        </h2>
                        <input type="text" id="uname" name="username" placeholder="Apple Id" value={this.state.userId} onChange={userId => {this.handleUserId(userId)}} />
                        <input type="password" id="pwd" name="password" placeholder="Password" value={this.state.password} onChange={pwd => {this.handlePassword(pwd)}}/>
                        <button className="btn btn-success btn-sm w-100" >
                            Add</button>
                        <ul>
                            <li>
                                {this.state.userId}
                            </li>
                            <li>
                                {this.state.password}
                            </li>
                            <li>
                                {this.state.currentUser.id}, {this.state.currentUser.password}
                            </li>

                        </ul>
                    </form>
                </div>
                <HomePage match={this.props.currentUser}/>

            </div>
    );
    }
    }
function mapDispatchToProps(dispatch) {
    return {
        validateUser: (user) => dispatch(validateUser(user))
    };
}
function mapStateToProps(users) {
    console.log(users);
   // const { currentState } = {user};
    return users;
}

export default connect(mapStateToProps, mapDispatchToProps)(Signin);