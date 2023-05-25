META{"name":"OnlineStatusHiderPlugin","rekkanoken":"Online Status Hider Plugin","website":"https://twitter.com/rekkan0ken"}*//

class OnlineStatusHiderPlugin {
    getName() {
        return "Online Status Hider Plugin";
    }

    getDescription() {
        return "Hides all online statuses on Discord.";
    }

    start() {
        this.hideOnlineStatuses();
    }

    stop() {
        this.restoreOnlineStatuses();
    }

    hideOnlineStatuses() {
        const styleElement = document.createElement("style");
        styleElement.setAttribute("id", "online-status-hider-plugin-style");
        styleElement.textContent = `
            .member .status {
                display: none !important;
            }
        `;
        document.head.appendChild(styleElement);
    }

    restoreOnlineStatuses() {
        const styleElement = document.getElementById("online-status-hider-plugin-style");
        if (styleElement) {
            styleElement.remove();
        }
    }
}
