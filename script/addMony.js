document.getElementById('cashout').style.display = 'none';
document.getElementById('add-money-box').addEventListener('click', function () {
    document.getElementById('addmoney').style.display = 'block';
    document.getElementById('cashout').style.display = 'none';
});

document.getElementById('cashout-box').addEventListener('click', function () {
     document.getElementById('addmoney').style.display = 'none';
    document.getElementById('cashout').style.display = 'block';
   
})

document.getElementById('add-money').addEventListener('click', function () {
    const accountNumber = document.getElementById('Acount-number').value;
    const pinNumber = document.getElementById('pin').value;
    const convertedPinNumber = parseInt(pinNumber);
    const amount = document.getElementById('amount').value;
    const convertedAmount = parseFloat(amount);
    const mainBalance = document.getElementById('main-balance').innerText;
    const convertedmainBalance = parseFloat(mainBalance);
    
    if (accountNumber.length === 11) {
        if (convertedPinNumber === 1234) {
            const sum = convertedmainBalance + convertedAmount;
            const mainBalance = document.getElementById('main-balance').innerText = sum;
        }
    }
    else {
        alert('account number tik nai');
    }
})