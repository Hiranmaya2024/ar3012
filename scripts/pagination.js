//pagination.js
function paginateTable(table, paginationContainer, rowsPerPage) {
    const tbody = table.querySelector('tbody');
    const rows = Array.from(tbody.rows);
    const totalPages = Math.ceil(rows.length / rowsPerPage);
    let currentPage = 1;

    // Function to render a specific page
    function renderPage(page) {
        tbody.innerHTML = ''; // Clear the table
        const start = (page - 1) * rowsPerPage;
        const end = start + rowsPerPage;
        rows.slice(start, end).forEach(row => 
            tbody.appendChild(row));
    //pageInfo.textContent = Page ${currentPage} of ${totalPages}

        // Update button states
        prevButton.disabled = page === 1;
        nextButton.disabled = page === totalPages;
    }

    // Setup pagination controls
    paginationContainer.innerHTML = ''; // Clear previous controls

    // Create Previous Button
    const prevButton = document.createElement('button');
    prevButton.textContent = 'Previous';
    prevButton.classList.add('btn', 'btn-secondary', 'me-2');
    prevButton.disabled = true; // Initially disabled
    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
        }
    };
    paginationContainer.appendChild(prevButton);

    // Create Next Button
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next';
    nextButton.classList.add('btn', 'btn-secondary', 'ms-2');
    nextButton.disabled = totalPages === 1; // Disable if only one page
    nextButton.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
        }
    };
    paginationContainer.appendChild(nextButton);

    // Render the first page
    renderPage(currentPage);
}


