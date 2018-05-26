//export const VALIDATE_USER = 'VALIDATE_USER';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const CURRENT_USER = 'CURRENT_USER';

function validateUser(validateData, callback) {
    setTimeout(() => {
        console.log(validateData);
        //console.log(credentials);
        for(let usr of validateData.credentials){
            console.log(usr);
            if(validateData.user.id === usr.id && validateData.user.password === usr.password){
                console.log('hey');
                return callback(null);
            }
        }
        return callback(new Error('Invalid email and password'));
    }, 1000);
}

export function login(user, credentials) {
    return dispatch => {
        dispatch(loginPending(true));
        dispatch(loginSuccess(false));
        dispatch(loginError(null));

        console.log(credentials);
        let validateData = {user: user, credentials: credentials};

        validateUser(validateData, error => {
            dispatch(loginPending(false));
        if (!error) {
            dispatch(loginSuccess(true));
            dispatch(currentUser(validateData.user.id));
        } else {
            dispatch(loginError(error));
        }
    });
    }
}

function currentUser(user){
    return {
        type: CURRENT_USER,
        user
    }
}

function loginPending(isLoginPending) {
    return {
        type: LOGIN_PENDING,
        isLoginPending
    };
}

function loginSuccess(isLoginSuccess) {
    return {
        type: LOGIN_SUCCESS,
        isLoginSuccess
    };
}

function loginError(loginError) {
    return {
        type: LOGIN_ERROR,
        loginError
    }
}
