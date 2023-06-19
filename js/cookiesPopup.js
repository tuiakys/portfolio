if (localStorage.getItem('cookie') == null) {
    gtag('consent', 'default', {
        'ad_storage': 'denied'
    });
} else {
    document.getElementById('cookies').classList.remove('showCookies');
}

document.getElementById('cookieAceito').addEventListener('click', function () {
    localStorage.setItem('cookie', 'aceito');
    document.getElementById('cookies').classList.remove('showCookies');
    location.reload();
});

document.getElementById('cookieRecusado').addEventListener('click', function () {
    localStorage.setItem('cookie', 'recusado');
    document.getElementById('cookies').classList.remove('showCookies');
    location.reload();
});