document.addEventListener("DOMContentLoaded", function() {
    // Get current date and time
    const currentDate = new Date();

    // Display current date and time
    displayCurrentDate(currentDate);

    // Calculate and display the date 90 days from now
    const futureDate = new Date();
    futureDate.setDate(currentDate.getDate() + 90);
    displayFutureDate(futureDate);
});

function displayCurrentDate(date) {
    const currentDateElement = document.getElementById("currentDate");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
    currentDateElement.textContent = "Current Date and Time: " + date.toLocaleDateString('en-US', options);
}

function displayFutureDate(date) {
    const futureDateElement = document.getElementById("futureDate");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    futureDateElement.textContent = "Date 90 Days from Now: " + date.toLocaleDateString('en-US', options);
}
document.addEventListener("DOMContentLoaded", function() {
    // Initialize date picker
    const datePicker = datepicker('#datepicker', {
        autohide: true,
        format: 'yyyy-mm-dd'
    });
});

function calculateDate() {
    const selectedDate = document.getElementById("datepicker").value;

    if (!selectedDate) {
        alert("Please select a date.");
        return;
    }

    const currentDate = new Date(selectedDate);
    const futureDate = new Date(currentDate);
    futureDate.setDate(currentDate.getDate() + 90);

    displayResult(currentDate, futureDate);
}

function displayResult(currentDate, futureDate) {
    const resultElement = document.getElementById("result");
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    resultElement.innerHTML = `
        <p>Selected Date: ${currentDate.toLocaleDateString('en-US', options)}</p>
        <p>Date 90 Days from Now: ${futureDate.toLocaleDateString('en-US', options)}</p>
    `;
}
