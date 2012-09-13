﻿(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            initDeals()
            // TODO: Initialize the page here.
        }
    });
})();

function initDeals() {
    var msg = new Windows.UI.Popups.MessageDialog("GoodBye, see you soon!");
    msg.showAsync().then();
}