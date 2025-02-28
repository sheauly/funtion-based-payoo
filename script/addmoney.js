document.getElementById('add-money').addEventListener('click', function (event) {
    event.preventDefault();
    
    const amount = getInputValueById("amount");
    const pin = getInputValueById("pin");
    const account = document.getElementById('Acount-number').value;
    const mainBalance = getInnerTextById("main-balance");
    const selectedBank = document.getElementById('allBank').value;
    console.log(selectedBank);

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
            
            const div = document.createElement('div');
            div.classList.add("bg-red-400")
            div.innerHTML = `
            <h1 class="text-yellow-300">ADDed Money from ${selectedBank} </h1>
            <h3>${amount}</h3>
            <p>account number: ${account}</p>
            `
            container.appendChild(div);
        }
        
        else {
          pin('pin number tik nai')  
        }
    }
    else {
    alert('account number tik nai')
    }
})