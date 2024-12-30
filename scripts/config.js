//config.js
// Google Sheets API Configuration
const config = {
    // Replace this with your actual API key from Google Cloud Console
    // Steps to get API key:
    // 1. Go to https://console.cloud.google.com/
    // 2. Create a new project or select existing one
    // 3. Enable the Google Sheets API:
    //    - Go to "APIs & Services" > "Library"
    //    - Search for "Google Sheets API"
    //    - Click "Enable"
    // 4. Create API key:
    //    - Go to "APIs & Services" > "Credentials"
    //    - Click "Create Credentials" > "API key"
    //    - Copy the generated API key and paste it below
    API_KEY: 'AIzaSyDyr0jy3yjk8ITkalWz3Aq-E6Z9256evxY', // Your API key goes here (it should start with 'AIza')
    
    // Your Google Sheet ID (from the sheet URL)
    SHEET_ID: '1ebu403DhcfqRJ6oVTZJHWT98-wxElQ5nx9djk-JoMp0',
    
    // Required scope for read-only access
    SCOPES: ['https://www.googleapis.com/auth/spreadsheets.readonly']
};

// Never commit this file with your actual API key
// For production, use environment variables or a secure key management service


