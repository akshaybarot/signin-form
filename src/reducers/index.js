
import { LOGIN_ERROR, LOGIN_PENDING, LOGIN_SUCCESS, CURRENT_USER } from "../actions/index";

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
        },
        {
            username: 'Shawn',
            id: 'xyz@abc.com',
            password: 'XYZabc123',
        },
        {
            username: 'John',
            id: 'xyz@xyz.com',
            password: 'Xyz@Xyz',
        },
    ],
    currentUser: {username: "", id: ""},
    isLoginSuccess: false,
    isLoginPending: false,
    loginError: null
};

const user = (state = initialState, action) => {

    switch (action.type) {
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

        case CURRENT_USER:
            let c_user = {};
            console.log(action.user);
            for(let user of state.credentials){
                if(user.id === action.user){
                    c_user.username = user.username;
                    c_user.id = user.id;
                }
            }
            console.log(c_user);
            return {
                ...state,
                currentUser: c_user
            }

        default :
            return state;
    }
};

export default user;