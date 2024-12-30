document.addEventListener
('DOMContentLoaded', async () => 
{
 const customerLedgerTable1 = document.getElementById('customerLedgerTable');
  const loginForm = document.getElementById('balanceForm');

  loginForm.addEventListener
   ('submit',async() =>
    {
      const customerid = document.getElementById('customerid').value;
      const errorMessage = document.getElementById('errorMessage');

        errorMessage.textContent = '';
      try {
           if (typeof window.getcustomerLedger !== 'function') {
          throw new Error('API functions not loaded properly');
             }
 
       const ledger = await window.getcustomerledger();
      // if (!Array.isArray(customerid))
	// {
         //       throw new Error('Invalid customerid');
       //  }
         // Clear existing rows
          //    const balanceTableBody = document.querySelector('#balanceTable tbody');
         //     balanceTableBody.innerHTML = '';
         // Populate table with fetched data
      const userLedger=ledger.filter(row=> row[0] === customerid);
           userLedger.forEach
	   (row =>
           {
                 const tr = document.createElement('tr');
                 row.innerHTML = `
                      <td>${item.username}</td>
                      <td>${item.balance}</td>
                      <td>${item.currentyear}</td>
                      <td>${item.currentmonthsale}</td>
                      <td>${item.currentmonthpayment}</td>
                      `;
                 balanceTableBody.appendChild(row);
           });
      }
catch (error) 
{
        console.error('Error fetching balance:', error);
        alert('Failed to fetch balance. Please try again later.');
    }
  });
});