"use strict";
const login = new UserForm();
login.loginFormCallback = (data) => {ApiConnector.login(data, () => {
    if (!data) {
        login.setLoginErrorMessage("Ошибка при авторизации!");
    } else {
        login.reload(true);
  }  
 });
}


login.registerFormCallback = (data) => {ApiConnector.register(data, () => {
    if (!data) {
        login.setRegisterErrorMessage("Ошибка при регистрации!");
    } else {
        login.reload(true);
    }
})}
