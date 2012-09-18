﻿var global_api_key = "d1d11c0cf2605c1e396a";
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/home/home.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            DrawDeals();
            flightsubmit.addEventListener('click', function (e) {
                console.log(flightfrom.value);
                document.getElementById("flightfrom").setAttribute("data-id-kota", "Asu");
                console.log(flightfrom.getAttribute('data-id-kota'));
                console.log(flightto.value);
                console.log(flightto.getAttribute('data-id-kota'));
                console.log(fclass.value);
                console.log(fpessanger.value);
            });
            flightfrom.addEventListener("input", function (e) { readJsonCityFlight(flightfrom.value) })

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

function readJsonCityFlight(city) {
    var url = "http://www.wego.co.id/id/flights/api/autocomplete/5/locations/6/" + city + ".js";
    WinJS.xhr({ url: url }).then(function (data) {
        var result = JSON.parse(data.responseText);
        for (var i = 0; i < result.r.length; i++) {
            console.log(result.r[i].c);
        }
    })
}

function readJsonCityHotels(city, name) {
    var url = "http://www.wego.co.id/id/hotels/api/autocomplete/1/locations/10/" + city + ".js";
    WinJS.xhr({ url: url }).then(function (data) {
        var result = JSON.parse(data.responseText);
        for (var i = 0; i < result.length; i++) {
            console.log(result[i].id + " draw on " + name);
        }
    })
}
function calendar() { }

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
function readJsonCity(city) {
    var url = "http://www.wego.co.id/id/flights/api/autocomplete/5/locations/6/" + city + ".js";
    WinJS.xhr({ url: url }).then(function (data) {
        var result = JSON.parse(data.responseText);
        for (var i = 0; i < result.r.length; i++) {
            console.log("this is id for country " + result.r[i].id);
        }
    })
}

