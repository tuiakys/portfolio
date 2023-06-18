document.getElementById('restartCookies').addEventListener("click", function () {
    gtag('consent', 'default', {
        'ad_storage': 'denied'
    });
    localStorage.setItem("cookie", "empty");
    document.getElementById('cookies').classList.add('showCookies');
});