//export const VALIDATE_USER = 'VALIDATE_USER';
export const LOGIN_PENDING = 'LOGIN_PENDING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

function validateUser(user, callback) {
    setTimeout(() => {
        console.log(user);
        if (user.id === 'admin@example.com' && user.password === 'admin') {
            console.log('Hi');
            return callback(null);
        } else {
            console.log('Helllo');

            return callback(new Error('Invalid email and password'));
        }
    }, 1000);
}

export function login(user) {
    return dispatch => {
        dispatch(loginPending(true));
        dispatch(loginSuccess(false));
        dispatch(loginError(null));

        validateUser(user, error => {
            dispatch(loginPending(false));
        if (!error) {
            dispatch(loginSuccess(true));
        } else {
            dispatch(loginError(error));
        }
    });
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

/*
function callLoginApi(email, password, callback) {
    setTimeout(() => {
        if (email === 'admin@example.com' && password === 'admin') {
        return callback(null);
    } else {
        return callback(new Error('Invalid email and password'));
    }
}, 1000);
}*/
