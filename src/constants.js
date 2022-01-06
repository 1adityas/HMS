

export default class Routes {
    static LOGIN = {
        endPoint: "/hospital/user/login",
        method: "POST",
    };

    static GENDER = {
        endPoint: "/master/gender",
        method: "POST",
    };
    static PATIENTS_LIST = {
        endPoint: "hospital/user/patients/get",
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

export const SETTINGS = [{ name: "Profile" }, { name: 'Account' }, { name: "Dashboard" }, { name: "Log Out" }];

export const HEADER_PAGES = [{ name: "Dashboard", action: '/ms-dashboard' }, { name: 'Ward Details', }, { name: 'Patient Details', action: '/PatientDetails' }, { name: 'Discharged Patients', action: '/Discharge' }, { name: 'Laboratory & Imaging', action: '/LabImg' }];

