import Routes from "./constants"
import axios from "axios"
import { log, urlGenerator } from "./helperFunctions"





export const getGender = async (payload, headers) => {
    try {
        let url = urlGenerator(Routes.GENDER.endPoint)
        let response = await axios.post(url, payload, { headers: { ...headers } })
        return response
    } catch (error) {
        log("error", error)
        return error
    }
}
export const newAdmission = async (payload, headers) => {
    try {
        let url = urlGenerator(Routes.NEW_ADMISSION.endPoint)
        let response = await axios.post(url, payload, { headers: { ...headers } })
        return response
    } catch (error) {
        log("error", error)
        return error
    }
}

export const getPincode = async (payload, headers) => {
    try {
        let url = urlGenerator(Routes.PINCODE.endPoint)
        let response = await axios.post(url, payload, { headers: { ...headers } })
        return response
    } catch (error) {
        log("error", error)
        return error
    }
}

export const getWards = async (payload, headers) => {
    try {
        let url = urlGenerator(Routes.WARDS.endPoint)
        let response = await axios.post(url, payload, { headers: { ...headers } })
        return response
    } catch (error) {
        log("error", error)
        return error
    }
}
export const getWardBedIds = async (payload, headers) => {
    try {
        let url = urlGenerator(Routes.WARD_BEDS.endPoint)
        let response = await axios.post(url, payload, { headers: { ...headers } })
        return response
    } catch (error) {
        log("error", error)
        return error
    }
}

export const login = async (payload, headers) => {
    try {
        let url = urlGenerator(Routes.LOGIN.endPoint)
        let response = await axios.post(url, payload, { headers: { ...headers } })
        return response
    } catch (error) {
        log("error", error)
        return error
    }
}
