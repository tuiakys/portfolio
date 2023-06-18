function clearFormAndThanks() {
    setTimeout(function () {
        document.getElementById('hiddenMessage').classList.add('displayMessage');
        document.getElementById('formContato').classList.add('hiddenForm');
    }, 1000);

}