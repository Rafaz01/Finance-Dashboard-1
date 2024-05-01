$(document).ready(function() {
    // Sample data (you can replace this with your own data)
    var expensesData = {
        labels: ["Housing", "Food", "Transportation", "Entertainment", "Others"],
        datasets: [{
            label: 'Expenses',
            data: [800, 400, 200, 300, 500], // Sample expense amounts
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'
            ],
            borderWidth: 1
        }]
    };

    var incomeExpenseData = {
        labels: ["Income", "Expenses"],
        datasets: [{
            label: 'Income vs. Expenses',
            data: [2500, 1800], // Sample income and expense amounts
            backgroundColor: [
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 99, 132, 0.5)'
            ],
            borderWidth: 1
        }]
    };

    // Create and display the pie chart for expenses
    var expensePieChart = new Chart($("#expensePieChart"), {
        type: 'pie',
        data: expensesData,
        options: {
            title: {
                display: true,
                text: 'Expense Breakdown'
            }
        }
    });

    // Create and display the bar chart for income vs. expenses
    var incomeExpenseBarChart = new Chart($("#incomeExpenseBarChart"), {
        type: 'bar',
        data: incomeExpenseData,
        options: {
            title: {
                display: true,
                text: 'Income vs. Expenses'
            },
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});