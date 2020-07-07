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
money.addMoneyCallback = (data) => ApiConnector.addMoney(data, () => {
    if (data.amount && data.currency) {
        ProfileWidget.showProfile(data);
        money.setMessage(isError, "Баланс успешно пополнен!");
        document.location.reload(true);
    }
});

