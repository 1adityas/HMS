import React from "react";

export default React.createContext({
  isAuthenticated: false,
  updateLoginStatus: () => { },
  loginUser: () => {},
  logOutUser: () => {},
  addNewAdmission: () => {},
  getMasterData: () => {},
});


