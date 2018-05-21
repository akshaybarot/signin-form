import { VALIDATE_USER } from "../actions/index";

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
    valid: false,
    currentUser: {username: "", id: ""},
};

const user = (state = initialState, action) => {
    switch (action.type) {

        case VALIDATE_USER:
            let id = action.user.id;
            let pwd = action.user.password;
            let match = false;
            let currentUsr = {};

            for(let usr of state.credentials){
                if(id === usr.id){
                    if(pwd === usr.password){
                        match = true;
                        currentUsr = { username: usr.username, id: usr.id};
                    }
                }
            }
            console.log(match + currentUsr);
            return {
                ...state,
                valid: match,
                currentUser: currentUsr
            };

        default :
            return state;
    }
};

export default user;