import React, {Component} from 'react';
//import {connect} from "react-redux";

class HomePage extends Component{

    constructor(props){
        super(props);

        console.log(this.props);
    }
    render(){
    // const {currentState} = this.props;
     return (
       <div>
           <p>
               Akshay
               {this.props.match.username}
               {this.props.match.id}

               {console.log(this.props)}
               {/*currentState.valid*/}
               {/*this.props.user.currentUser*/}
           </p>
       </div>
     );
 }
}
/*function mapStateToProps(user) {
    console.log(user);
    const { currentState } = {user};
    return currentState;
}*/
export default HomePage;
//export default connect(mapStateToProps)(HomePage);