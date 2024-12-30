//customer.js
document.addEventListener('DOMContentLoaded', () => {
const loginForm1 = document.getElementById('balanceForm');

  loginForm1.addEventListener
   ('fetchBalance',async() =>
    {
    const ledgerTable1 = document.getElementById('balanceTable1');
    const username = document.getElementById('customerId').value;
    const errorMessage = document.getElementById('errorMessage');

        errorMessage.textContent = '';
    const custledger = await window.getCustomerLedger();
    const userLedger1 = custledger.filter(row => row[0] === username);
    userLedger1.forEach(row => 
	{
        const tr = document.createElement('tr');
        row.slice(1).forEach(cell => 
	{
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        balanceTable1.querySelector('tbody').appendChild(tr);
        });

});

});