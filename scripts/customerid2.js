document.getElementById('fetchBalance').addEventListener('click', function() {
    const customerId = document.getElementById('customerId').value;
    const errorMessage = document.getElementById('errorMessage');
    const balanceTableBody = document.getElementById('balanceTable1');

    if (!customerId) {
        errorMessage.textContent = 'Please enter a Customer ID.';
        return;
    }

    window.getCustomerLedger()
        .then(data => {
            if (!data || data.length === 0) {
                errorMessage.textContent = 'No data found for the given Customer ID.';
                return;
            }

            // Clear any existing rows
        //    balanceTableBody.innerHTML = '';

            // Filter data for the given customerId and populate the table
            const filteredData = data.filter(row => row[0] === customerId);
            if (filteredData.length === 0) {
                errorMessage.textContent = 'No data found for the given Customer ID.';
                return;
            }

            filteredData.forEach(row => {
                const tableRow = document.createElement('tr');
                tableRow.innerHTML = `
                    <td>${row[0]}</td> <!-- Customer Name -->
                    <td>${row[1]}</td> <!-- Balance -->
                    <td>${row[2]}</td> <!-- Sale This Year -->
                    <td>${row[3]}</td> <!-- Sale This Month -->
                    <td>${row[4]}</td> <!-- Payment This Month -->
                `;
                balanceTableBody.appendChild(tableRow);
            });
        })
        .catch(error => {
            errorMessage.textContent = 'An error occurred while fetching the data.';
            console.error('Error fetching data:', error);
        });
});