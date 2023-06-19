document.getElementById('restartCookies').addEventListener("click", function () {
    gtag('consent', 'default', {
        'ad_storage': 'denied'
    });
    localStorage.removeItem('cookie');
    document.getElementById('cookies').classList.add('showCookies');
});