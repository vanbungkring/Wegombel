(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            try {
                DrawDeals()
            }
            catch (e) {

            }
            // TODO: Initialize the page here.
        }
    });
})();

function DrawDeals() {
    var url = 'http://deals.wego.com/api/featured/XX.js?currency=USD';
    WinJS.xhr({ url: url }).then(function (data) {
        var result = JSON.parse(data.responseText);
        for (var i = 0; i < result.length; i++) {
            document.getElementsByClassName("deals-draw").innerText = result[i].url;
        }


    });

}