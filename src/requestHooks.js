import Routes from "./constants"
import axios from "axios"
import { log, urlGenerator } from "./helperFunctions"





export const getGender = async (item, headers) => {
    try {
        let url = urlGenerator(Routes.GENDER.endPoint)
        let response = await axios.post(url, item, { headers: { ...headers } })
        return response
    } catch (error) {
        log("error", error)
        return error
    }
}

export const login = async (item, headers) => {
    try {
        let url = urlGenerator(Routes.LOGIN.endPoint)
        log("url", url)
        let response = await axios.post(url, item)
        return response
    } catch (error) {
        log("error", error)
        return error
    }
}
export const newAdmission = async (item, headers) => {
    try {
        let url = urlGenerator(Routes.LOGIN.endPoint)
        log("url", url)
        let response = await axios.post(url, item)
        return response
    } catch (error) {
        log("error", error)
        return error
    }
}
