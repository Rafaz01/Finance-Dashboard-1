document.addEventListener('DOMContentLoaded', function() {
    // Check if user information is stored in a cookie
    const userInfoCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('userInfo='));
    const userInfo = userInfoCookie ? JSON.parse(userInfoCookie.split('=')[1]) : null;

    const userInfoForm = document.getElementById('userInfoForm');
    const welcomeMessage = document.getElementById('welcomeMessage');
    const userName = document.getElementById('userName');

    if (userInfo) {
        // If user information is found in the cookie, display welcome message
        welcomeMessage.style.display = 'block';
        userName.textContent = userInfo.name;
    }

    userInfoForm.addEventListener('submit', function(event) {
        event.preventDefault();

        // Get user input from the form
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        // Create an object to store user information
        const userInfo = { name, email };

        // Store user information in a cookie (valid for 30 days)
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 30);
        document.cookie = `userInfo=${JSON.stringify(userInfo)}; expires=${expirationDate.toUTCString()}; path=/`;

        // Display welcome message
        welcomeMessage.style.display = 'block';
        userName.textContent = userInfo.name;

        // Clear form fields
        userInfoForm.reset();
    });

    // Function to set cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to get cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
});