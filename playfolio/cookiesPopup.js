document.addEventListener("DOMContentLoaded", function () {
    var cookieHTML = '<style>#cookies{background-color:#323232;border-radius:20px;width:360px;max-width:calc(98% - 40px);margin-left:10px;position:fixed;bottom:10px;padding:10px 20px;box-shadow:0 3px 15px 0 #0000005c;display:none}#cookies p{font-size:10px;margin:0;text-align:center}#cookies .buttonsCookie{display:flex;gap:20px;justify-content:center;align-items:center;margin:15px}#cookies.showCookies{display:block}</style><section id="cookies" class="showCookies"><p>Este site usa cookies do Google e Microsoft para acompanhamento do número de acesso às páginas, registro da quantidade de visitantes e etc. Os cookies só serão ativados se você concordar com eles, fica a seu critério participar das métricas de uso.</p><div class="buttonsCookie"><div class="borderButtonGradient" id="cookieAceito"><div><p>Aceito os cookies</p></div></div><div class="borderButtonGradient" id="cookieRecusado"><div><p>Não, obrigado</p></div></div></div><p>Confira a política de privacidade completa <a href="https://tuiakys.github.io/privacy-policy.html">clicando aqui</a>.</p><button style="display: none" id="restartCookies"></button></section>';

    document.body.insertAdjacentHTML('beforeend', cookieHTML);

    if (localStorage.getItem('cookie') == null) {
        gtag('consent', 'default', {
            'ad_storage': 'denied'
        });
    } else {
        document.getElementById('cookies').classList.remove('showCookies');
    }

    document.getElementById('restartCookies').addEventListener('click', function () {
        gtag('consent', 'default', {
            'ad_storage': 'denied'
        });
        localStorage.removeItem('cookie');
        document.getElementById('cookies').classList.add('showCookies');
        location.reload();
    });

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
});