const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const resultText = document.getElementById('resultText');

async function convert() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amount = amountInput.value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await response.json();
    const rate = data.rates[to];
    const total = (amount * rate).toFixed(2);
    
    resultText.innerHTML = `${amount} ${from} = ${total} ${to}`;
}

amountInput.addEventListener('input', convert);
fromCurrency.addEventListener('change', convert);
toCurrency.addEventListener('change', convert);

convert();
