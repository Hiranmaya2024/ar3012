//table.js

const tableBody = document.querySelector("#data-table tbody");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const pageInfo = document.getElementById("page-info");

let currentPage = 1;
const rowsPerPage = 10;

// Example data
const data = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    category: `Category ${((i % 5) + 1)}`,
    price: `₹${(i + 1) * 10}`,
}));

function renderTable(page) {
    tableBody.innerHTML = "";
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const rows = data.slice(start, end);

    rows.forEach(row => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td>${row.id}</td>
            <td>${row.name}</td>
            <td>${row.category}</td>
            <td>${row.price}</td>
        `;
        tableBody.appendChild(tr);
    });

    pageInfo.textContent = `Page ${currentPage} of ${Math.ceil(data.length / rowsPerPage)}`;
    prevBtn.disabled = page === 1;
    nextBtn.disabled = page === Math.ceil(data.length / rowsPerPage);
}

prevBtn.addEventListener("click", () => {
    if (currentPage > 1) {
        currentPage--;
        renderTable(currentPage);
    }
});

nextBtn.addEventListener("click", () => {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
        currentPage++;
        renderTable(currentPage);
    }
});

// Initial render
renderTable(currentPage);

