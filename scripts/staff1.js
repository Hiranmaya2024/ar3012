
//staff.js
document.addEventListener('DOMContentLoaded', async () => {
    const stockTable = document.getElementById('stockTable');
    const customerLedgerTable = document.getElementById('customerLedgerTable');
    const paginationContainerStock = document.getElementById('paginationContainerStock');
    const paginationContainerCustomer = document.getElementById('paginationContainerCustomer');

    // Check authentication
    if (!sessionStorage.getItem('isAuthenticated') || sessionStorage.getItem('userType') !== 'staff') {
        window.location.href = '../index.html';
        return;
    }

    // Load stock data
    const stockData = await window.getStockData();
    stockData.forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
            const td = document.createElement('td');
            td.textContent = cell;
            tr.appendChild(td);
        });
        stockTable.querySelector('tbody').appendChild(tr);
    });
    paginateTable(stockTable, paginationContainerStock, 10); // Apply pagination

});
