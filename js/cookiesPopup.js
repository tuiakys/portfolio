if (localStorage.getItem('cookie') != null) {
    document.getElementById('cookies').classList.remove('showCookies');
}

document.getElementById('cookieAceito').addEventListener('click', function () {
    gtag('consent', 'update', {
        'ad_storage': 'granted'
    });
    localStorage.setItem('cookie', 'aceito');
    document.getElementById('cookies').classList.remove('showCookies');
});

document.getElementById('cookieRecusado').addEventListener('click', function () {
    gtag('consent', 'default', {
        'ad_storage': 'denied'
    });
    localStorage.setItem('cookie', 'recusado');
    document.getElementById('cookies').classList.remove('showCookies');
});