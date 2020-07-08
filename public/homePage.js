const buttonExit = new LogoutButton();
buttonExit.action = () => ApiConnector.logout(() => {
    if (buttonExit) {
        document.location.reload(true);
    }
});

ApiConnector.current((args) => {
    if (args.success === true) {
        ProfileWidget.showProfile(args.data);
    } 
});

const currentRate = new RatesBoard();
function rate() {
    ApiConnector.getStocks((args) => {
        if (args.success === true) {
            currentRate.clearTable();
            currentRate.fillTable(args.data);
        }
    });
}
rate();
setInterval(rate(), 60000);

const money = new MoneyManager();
money.addMoneyCallback = (data) => ApiConnector.addMoney(data, (responce) => {
    if (responce.success === true) {
        ProfileWidget.showProfile(responce.data);
        money.setMessage(true, "Баланс успешно пополнен!");
    } else {
        money.setMessage(false, "Ошибка при пополнении счета!")
    }
});

money.conversionMoneyCallback = (data) => ApiConnector.convertMoney(data, (responce) => {
    if (responce.success === true) {
        ProfileWidget.showProfile(responce.data);
        money.setMessage(true, "Валюта успешно конвертирована!");
    } else {
        money.setMessage(false, "Ошибка при конвертировании валюты!")
    }
})

money.sendMoneyCallback = (data) => ApiConnector.transferMoney(data, (responce) => {
    if (responce.success === true) {
        ProfileWidget.showProfile(responce.data);
        money.setMessage(true, "Валюта успешно переведена!");
    } else {
        money.setMessage(false, "Ошибка при переводе валюты!")
    }
})

