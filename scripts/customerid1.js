document.addEventListener
('DOMContentLoaded', () => 
{
 const balanceTable = document.getElementById('balanceTable1');
  const loginForm1 = document.getElementById('balanceForm');
if(!loginForm1)
{
console.error('Login Form not Found');
return;
}
  loginForm1.addEventListener
   ('fetchBalance',async() =>
    {
      const username1 = document.getElementById('customerId').value;
      const errorMessage = document.getElementById ('errorMessage');

        errorMessage.textContent = '';
      try {
           if (typeof window.getcustomerLedger !== 'function') 
            {
          throw new Error('API functions not loaded properly');
             }
 
       const ledger = await window.getcustomerledger();

         // Populate table with fetched data
      const userLedger=ledger.filter(row=> row[0] === customerid);
      if(userLedger){
         sessionStorage.setItem('customerid',customerid);
         userLedger.forrach(row =>{
              const row1 = document.createElement('tr');
               {
              const balance= document.createElement('td');
              balance.textContent= entry.balance;
              row1.appndChild(balance);

              const salethisyr= document.createElement('td');
              salethisyr.textContent= entry.currentyear;
              row1.appndChild(salethisyr);

              const salethismonth= document.createElement('td');
              salethismonth.textContent= entry.currentmonthsale;
              row1.appndChild(salethismonth);

              const paymentthismonth= document.createElement('td');
              paymentthismonth.textContent= entry.currentmonthpayment;
              row1.appndChild(paymentthismonth);
              }balanceTable.querySelector('tbody').appendChild(row);}
            )}else { errorMessage.textContent = 'Invalid customer id';

            }
          }
          catch (error) {
            console.error('Error loading customer data:', error);
        }
        }
)
              
        
    

 });
              