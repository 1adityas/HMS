

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
    TOKEN:"token"
});