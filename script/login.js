document.getElementById('login-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const acountNumber = document.getElementById('Acount-number').value;
    const pinNumber = document.getElementById('pin').value;
    const convertedPinNumber = parseInt(pinNumber)
    if (acountNumber.length === 11)
        if(convertedPinNumber === 1234) {
        window.location.href="main.html"
        }
        else {
            alert('tumar pin number tik nai')
        }
    else {
        alert('tumar account tik nai')
    }
})