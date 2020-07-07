const button = new LogoutButton();
button.action = () => ApiConnector.logout(() => {
    if (button) {
        document.location.reload(true);
    }
})