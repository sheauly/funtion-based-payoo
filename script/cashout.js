document.getElementById('cashout-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const accountNumber = document.getElementById('Acount-number').value;

    const amount = getInputValueById('cashout-amount')
    const pinNumber = getInputValueById('cashout-pin');
    const mainBalance = getInnerTextById('main-balance');
    // console.log(pin)

    if (amount > mainBalance) {
        alert("invalid amount");
        return;
    }
    if (accountNumber.length === 11) {
        if (pinNumber === 1234) {
            const sum = mainBalance - amount;
            setInnerTextByIdandValue("main-balance", sum)

            const container = document.getElementById('transaction-container');

            const p = document.createElement("p");
            p.innerText = `
            cashout ${amount} from this ${accountNumber} account
            
            `
            container.appendChild(p)
        }
        else {
            alert('pin number not valid')
        }
    }
    else {
        alert('account number tik nai')
    }
})