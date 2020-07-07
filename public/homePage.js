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
