document.addEventListener('DOMContentLoaded', function() {
    const customerIdDropdown = document.getElementById('customerId');
    const errorMessage = document.getElementById('errorMessage');

    // Populate the dropdown with customer IDs
    window.getLoginCredentials()
        .then(data => {
            if (!data || data.length === 0) {
                errorMessage.textContent = 'No customer IDs found.';
                return;
            }

            data.forEach(row => {
                const option = document.createElement('option');
                option.value = row[0];
                option.textContent = row[0];
                customerIdDropdown.appendChild(option);
            });
        })
        .catch(error => {
            errorMessage.textContent = 'An error occurred while fetching customer IDs.';
            console.error('Error fetching customer IDs:', error);
        });
});

document.getElementById('fetchBalance').addEventListener('click', function() {
    const customerId = document.getElementById('customerId').value;
    const errorMessage = document.getElementById('errorMessage');
    const balanceTableBody = document.getElementById('balanceTable1');

    if (!customerId) {
        errorMessage.textContent = 'Please select a Customer ID.';
        return;
    }

    window.getCustomerLedger()
        .then(data => {
            if (!data || data.length === 0) {
                errorMessage.textContent = 'No data found for the given Customer ID.';
                return;
            }

            // Clear any existing rows
            balanceTableBody.innerHTML = '';

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