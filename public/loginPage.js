"use strict";
const login = new UserForm();
login.loginFormCallback = (data) => {ApiConnector.login(data, () => {
    if (data.password !== "demo") {
        login.setLoginErrorMessage("Ошибка при авторизации!");
    } else {
        document.location.reload(true);
  }  
 });
}


login.registerFormCallback = (data) => {ApiConnector.register(data, () => {
    if (data.password !== "demo") {
        login.setRegisterErrorMessage("Ошибка при регистрации!");
    } else {
        document.location.reload(true);
    }
})}
