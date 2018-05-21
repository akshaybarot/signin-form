export const VALIDATE_USER = 'VALIDATE_USER';
//export const REMOVE_ITEM = 'REMOVE_ITEM';


export function validateUser(user) {
    return {
        type : VALIDATE_USER,
        user
    }
}

/*export function removeItem(item) {
    return {
        type : REMOVE_ITEM,
        item
    }
}*/