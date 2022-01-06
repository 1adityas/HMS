import cookies from "js-cookie";
import { COOKIES_CONSTANTS } from "./constants";

let BASE_URL = "https://kenkotech.in/api/v1"

export default class Helper {
    static log(...data) {
        console.log(...data);
    }

    static urlGenerator(endpoint) {
        return BASE_URL + endpoint
    }

    static getToken() {
        let token = cookies.get(COOKIES_CONSTANTS.TOKEN)
        return token
    }
}

let log = Helper.log
let urlGenerator = Helper.urlGenerator
let getToken = Helper.getToken
export { log, urlGenerator, getToken }