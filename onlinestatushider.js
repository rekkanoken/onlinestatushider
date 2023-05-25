//META{"name":"OnlineStatusHiderPlugin","rekkanoken":"Online Status Hider Plugin","website":"https://twitter.com/rekkan0ken"}*//
class OnlineIndicatorRemover {
    getName() {
        return "Online Indicator Remover";
    }

    getDescription() {
        return "removes the online indicator in discord.";
    }

    start() {
        this.removeOnlineIndicator();
    }

    stop() {
        this.restoreOnlineIndicator();
    }

    removeOnlineIndicator() {
        const styleElement = document.createElement("style");
        styleElement.setAttribute("id", "online-indicator-remover-style");
        styleElement.textContent = `
            .member .status {
                background-color: transparent !important;
            }
        `;
        document.head.appendChild(styleElement);
    }

    restoreOnlineIndicator() {
        const styleElement = document.getElementById("online-indicator-remover-style");
        if (styleElement) {
            styleElement.remove();
        }
    }
}
