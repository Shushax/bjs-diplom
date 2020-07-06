"use strict";
const login = new UserForm();
login.loginFormCallback = (data) => { ApiConnector.login(data, callback)
if (!callback) {
    login.setLoginErrorMessage("Ошибка при авторизации!");
}
}
