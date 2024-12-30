//google-sheets-api.js

// Use configuration from config.js (config object is loaded from config.js script)
const BASE_URL = `https://sheets.googleapis.com/v4/spreadsheets/${config.SHEET_ID}/values`;

// Make functions available globally
window.getLoginCredentials = async function() {
    return await fetchSheetData('Login!A2:C');
};

window.getStockData = async function() {
    return await fetchSheetData('Stock!A2:F');
};

window.getCustomerLedger = async function() {
    return await fetchSheetData('CustomerLedger!A2:E');
};
window.getLedger = async function() {
    return await fetchSheetData('Ledger!A2:G');
};

window.getOffers = async function() {
    return await fetchSheetData('Offers!A2:A');
};

// Function to get API key from config
function getApiKey() {
    if (!config.API_KEY) {
        throw new Error('API key not configured. Please set it in config.js');
    }
    return config.API_KEY;
}

// Fetch data from a specific sheet range
async function fetchSheetData(range) {
    const API_KEY = getApiKey();
    const url = `${BASE_URL}/${range}?key=${API_KEY}`;
    
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error fetching data: ${response.statusText}`);
        }
        const data = await response.json();
        return data.values || [];
    } catch (error) {
        console.error('Error fetching sheet data:', error);
        throw error;
    }
}
