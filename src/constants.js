

export default class Routes {
    static LOGIN = {
        endPoint: "/hospital/user/login",
        method: "POST",
    };
    static GENDER = {
        endPoint: "/master/gender",
        method: "POST",
    };


}

export const COOKIES_CONSTANTS = Object.freeze({
    TOKEN: "token"
});
export const VALIDATION_TEXTS = Object.freeze({
    E001: "Invalid Username or Password",
    E002: "Invalid username",
    E003: "Invalid password",
});

export const SETTINGS = ['Profile', 'Account', 'Dashboard', 'Logout'];
