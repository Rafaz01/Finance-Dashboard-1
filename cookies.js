document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const rememberMe = document.getElementById('rememberMe').checked;

        // Perform authentication (e.g., send credentials to server for validation)

        // Simulate successful authentication
        const isAuthenticated = true;

        if (isAuthenticated) {
            if (rememberMe) {
                // Set a cookie to remember the user
                setCookie('username', username, 30); // Expires in 30 days
                setCookie('password', password, 30); // Expires in 30 days
            } else {
                // Clear any existing cookies
                clearCookie('username');
                clearCookie('password');
            }
            
            alert('Login successful!');
        } else {
            alert('Invalid username or password.');
        }
    });

    // Check for Remember Me cookie on page load
    const rememberedUsername = getCookie('username');
    const rememberedPassword = getCookie('password');

    if (rememberedUsername && rememberedPassword) {
        // Auto-fill login fields
        document.getElementById('username').value = rememberedUsername;
        document.getElementById('password').value = rememberedPassword;
        document.getElementById('rememberMe').checked = true;
    }
});

// Function to set a cookie
function setCookie(name, value, days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = 'expires=' + date.toUTCString();
    document.cookie = name + '=' + value + ';' + expires + ';path=/';
}

// Function to get a cookie by name
function getCookie(name) {
    const cookieName = name + '=';
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
            cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
            return cookie.substring(cookieName.length, cookie.length);
        }
    }
    return '';
}

// Function to clear a cookie by name
function clearCookie(name) {
    document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;';
}
