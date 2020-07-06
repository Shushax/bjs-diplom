const button = new LogoutButton();
button.action = () => ApiConnector.logout(() => {
    if (button) {
        button.reload(true);
    }
})