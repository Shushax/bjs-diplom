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

