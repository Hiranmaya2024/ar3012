//logout.js
function logout() {
  if (confirm('Are you sure you want to logout?')) {
    // Redirect to the login page or handle session cleanup
    window.location.href = 'index.html';
  }
}

