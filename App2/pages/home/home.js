(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            DrawDeals();
            flightfrom.addEventListener("change", function (e) {
                console.log(flightfrom.value)
            }, false);

        }
    });
})();

function DrawDeals() {
    var url = 'http://deals.wego.com/api/featured/XX.js?currency=USD';
    WinJS.xhr({ url: url }).then(function (data) {
        var result = JSON.parse(data.responseText);
        var yyy = document.getElementsByClassName("deals-draw");
        for (var i = 0; i < result.length; i++) {
            result[i].url;
            document.getElementById("deals-draw").innerHTML += '<li><a href=' + result[i].url + '><img src=' + result[i].image + '> <p class="text-headline">' + result[i].headline + '</p></a></li>';
        }



    });

}
function togglePopupUI() {
    if (runAnimation.innerHTML === "Show pop-up") {
        // Set desired final opacity on the UI element.
        myPopupUI.style.opacity = "1";

        // Run show popup animation
        WinJS.UI.Animation.showPopup(myPopupUI, null);

        runAnimation.innerHTML = "Hide pop-up";
    } else {
        // Set desired final opacity on the UI element.
        myPopupUI.style.opacity = "0";

        // Run show popup animation
        WinJS.UI.Animation.hidePopup(myPopupUI);

        runAnimation.innerHTML = "Show pop-up";
    }
}
function readJsonCity() {
}
function calendar() { }