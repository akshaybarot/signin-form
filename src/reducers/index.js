/*,
        {
            username: 'Shawn',
            id: 'xyz@abc.com',
            password: 'XYZabc123',
        },
        {
            username: 'John',
            id: 'xyz@xyz.com',
            password: 'Xyz@Xyz',
        },*/
import { LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS } from "../actions/index";

const initialState = {
    credentials: [
        {
            username: 'David',
            id: 'abc@abc.com',
            password: 'ABCabc123',
        },
        {
            username: 'Will',
            id: 'abc@xyz.com',
            password: 'admin123',
        }
    ],
    currentUser: {username: "", id: ""},
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
};

const user = (state = initialState, action) => {
    let dummy_data = state;
    console.log(dummy_data);

    switch (action.type) {

        /*case VALIDATE_USER:
            let id = action.payload.user.id;
            let pwd = action.payload.user.password;
            //let match = false;
            let currentUsr = {};
            let dummy_data = state.credentials;
            console.log(dummy_data);

            for(let usr in state.credentials){
                console.log('hi');
                if(id === usr.id && pwd === usr.password){
                        //match = true;
                        currentUsr = { username: usr.username, id: usr.id};
                    console.log('hey');

                    return action.payload.callback(null);
                    }
                    else{
                    console.log('hello');

                    return action.payload.callback(new Error('Invalid email and password'));
                    }

            }
            console.log(action.payload);
            return {
                ...state,
                currentUser: currentUsr
            };*/

        case LOGIN_PENDING:
            return {
                ...state,
                isLoginPending: action.isLoginPending
            };

        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoginSuccess: action.isLoginSuccess
            };

        case LOGIN_ERROR:
            return {
                ...state,
                loginError: action.loginError
            };

        default :
            return state;
    }
};

export default user;