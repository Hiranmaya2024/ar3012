//customer.js
document.addEventListener('DOMContentLoaded', async () => {
    const ledgerTable = document.getElementById('ledgerTable');
    const paginationContainer = document.getElementById('paginationContainer');
    const username = sessionStorage.getItem('username');

    // Check authentication
    if (!sessionStorage.getItem('isAuthenticated') || sessionStorage.getItem('userType') !== 'customer') {
        window.location.href = '../index.html';
        return;
    }
      document.getElementById("welcome-message").textContent = `Welcome, ${username}!`;
    // Load customer ledger
    const ledger = await window.getLedger();
    const userLedger = ledger.filter(row => row[0] === username);
    userLedger.forEach(row => 
	{
        const tr = document.createElement('tr');
        row.slice(1).forEach(cell => 
	{
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        ledgerTable.querySelector('tbody').appendChild(tr);
        });
    paginateTable(ledgerTable, paginationContainer, 10); // Apply pagination
});

