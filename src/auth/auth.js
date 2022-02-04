/*
    Mohammad Etedali 301056465
    COMP 308 - Lab 1
    Date: 2022-02-04
*/
const auth = {
  isLoggedIn: false,
  onAuthentication() {
    this.isLoggedIn = true;
  },
  
  getLogInStatus() {
    return this.isLoggedIn;
  },
  
  saveToken(userToken) {
    localStorage.setItem("token", JSON.stringify(userToken));
  },

  saveDataToLocalStorage(data) {
    localStorage.setItem("my_data", JSON.stringify(data));
  },

  getDataToLocalStorage() {
    const dataString = localStorage.getItem('my_data');
    const data = JSON.parse(dataString);
    return data;
  },

  getToken() {
    const tokenString = localStorage.getItem("token");
    const userToken = JSON.parse(tokenString);

    return userToken;
  },
};
export default auth;
