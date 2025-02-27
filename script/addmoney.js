document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    
    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");
    const account = document.getElementById('Acount-number').value;
    const mainBalance = getInnerTextById("main-balance");
    console.log(mainBalance)

    if (amount < 0) {
        alert("vai eita kono kotha positive number number dite hobe");
        return;
    }
    if (account.length === 11) {
        if (pin === 1234) {
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIdandValue('main-balance', sum)

            const container = document.getElementById('transaction-container')
            const p = document.createElement("p");
            p.innerText = `
            added ${amount} from ${account} account
            `
            container.appendChild(p)
        }
        else {
          pin('pin number tik nai')  
        }
    }
    else {
    alert('account number tik nai')
    }
})