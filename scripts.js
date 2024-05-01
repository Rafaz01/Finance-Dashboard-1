// Function to load TradingView widget with the specified theme
function loadTradingViewWidget(theme) {
    const widgetContainer = document.querySelector('.tradingview-widget-container');

    // Remove existing TradingView widget
    while (widgetContainer.firstChild) {
        widgetContainer.removeChild(widgetContainer.firstChild);
    }

    // Create new script element with the appropriate theme
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js';
    script.async = true;

    // Configure widget parameters based on the theme
    const widgetParams = {
        symbols: [
            {
                proName: "BITSTAMP:BTCUSD",
                title: "Bitcoin"
            },
            {
                proName: "BITSTAMP:ETHUSD",
                title: "Ethereum"
            },
            {
                description: "Microsoft",
                proName: "NASDAQ:MSFT"
            },
            {
                description: "Nvidia",
                proName: "NASDAQ:NVDA"
            },
            {
                description: "Apple",
                proName: "NASDAQ:AAPL"
            },
            {
                description: "Berkshire B",
                proName: "NYSE:BRK.B"
            },
            {
                description: "AMD",
                proName: "NASDAQ:AMD"
            },
            {
                "proName": "FOREXCOM:SPXUSD",
                "title": "S&P 500 Index"
              },
              {
                "description": "Tesla",
                "proName": "NASDAQ:TSLA"
              },
              {
                "description": "Meta",
                "proName": "NASDAQ:META"
              },
              {
                "description": "QQQ",
                "proName": "NASDAQ:QQQ"
              },
              {
                "description": "Amazon",
                "proName": "NASDAQ:AMZN"
              },
              {
                "description": "Google",
                "proName": "NASDAQ:GOOGL"
              },
              {
                "description": "AMD",
                "proName": "NASDAQ:AMD"
              },
              {
                "description": "Boeing",
                "proName": "NYSE:BA"
              },
              {
                "description": "Bank of America",
                "proName": "NYSE:BAC"
              }
        ],
        showSymbolLogo: true,
        isTransparent: false,
        displayMode: "compact",
        colorTheme: theme, // Use the specified theme
        locale: "en"
    };

    // Set widget parameters as JSON
    script.text = JSON.stringify(widgetParams);

    // Append the script to the container
    widgetContainer.appendChild(script);
}

// Function to toggle between light and dark themes
function toggleTheme() {
    const body = document.body;

    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        loadTradingViewWidget('light'); 
        loadTradingViewNewsWidget('light');
    } else {
        body.classList.add('dark-theme');
        loadTradingViewWidget('dark');
        loadTradingViewNewsWidget('dark');
    }
}


// Load initial TradingView widget with the appropriate theme
loadTradingViewWidget('light'); // Load light theme by default

// Change theme
const themeToggler = document.querySelector(".theme-toggler");
themeToggler.addEventListener('click', toggleTheme);

// Change theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span').classList.toggle('active');
});
//expense tracker
const transactions = JSON.parse(localStorage.getItem("transactions")) || [
   {
        id: 1,
        name: 'salary',
        amount: 3000,
        date: new Date(),
        type:"income"
        
    },
    {
        id: 2,
        name: 'haircut',
        amount: 200,
        date: new Date(),
        type:"expense"
    },
    {
        id: 3,
        name: 'concert ticket',
        amount: 60,
        date: new Date(),
        type:'expense'
    }, 
];
const formatter = new Intl.NumberFormat("en-US",{
    style: "currency",
    currency: "USD",
    signDisplay: "always",

})
const list = document.getElementById("transactionList");
const form = document.getElementById("transactionForm");
const status = document.getElementById("status");
const balance = document.getElementById("balance");
const income = document.getElementById("income");
const expense = document.getElementById("expense");

form.addEventListener("submit",addTransaction);

function updateTotal() {
    const incomeTotal = transactions
    .filter ((trx) => trx.type === "income")
    .reduce((total,trx)=> total + trx.amount, 0);

    const expenseTotal = transactions
    .filter ((trx) => trx.type === "expense")
    .reduce((total,trx)=> total + trx.amount, 0);

    const balanceTotal = incomeTotal - expenseTotal;

    balance.textContent = formatter.format(balanceTotal).substring(1);
    income.textContent = formatter.format(incomeTotal);
    expense.textContent = formatter.format(expenseTotal* -1);
}


function renderList() {
    list.innerHTML = "";

    if (transactions.length === 0) {
        status.textContent = "No transactions.";
        return;
    } else {
        status.textContent = "";
    }
    

    transactions.forEach(({ id, name, amount, date, type }) => {
        const sign = 'income' === type ? 1 : -1;

        const li = document.createElement("li");

        li.innerHTML = `
            <div class="name">
                <h4>${name}</h4>
                <p>${new Date(date).toLocaleDateString()}</p>
            </div>

            <div class="amount ${type}">
                <span>${formatter.format(amount * sign)}</span>
            </div>
            
            <div class="action">
            <span class="material-symbols-outlined" onclick="deleteTransaction(${id})">cancel</span>
            </div>
        `;

        list.appendChild(li);
    });
}

renderList();
updateTotal();

function deleteTransaction(id) {
    const index = transactions.findIndex((trx) => trx.id === id);
    transactions.splice(index,1);

    updateTotal();
    saveTransaction();
    renderList();
}
function addTransaction(e) {
    e.preventDefault();

    const formData = new FormData(this);
    transactions.push({
    id : transactions.length + 1,
    name : formData.get("name"),
    amount : parseFloat(formData.get("amount")),
    date: new Date(formData.get("date")),
    type: 'on' === formData.get('type') ? "income" : "expense",
    });

    this.reset();

    updateTotal();
    saveTransaction();
    renderList();
}

function saveTransaction() {
 transactions.sort((a,b) => new Date(b.date) - new Date(a.date));
 localStorage.setItem("transactions", JSON.stringify(transactions));
}

// Function to load TradingView widget for news
function loadTradingViewNewsWidget(theme) {
    const widgetContainer = document.querySelector('.tradingview-widget-news');

    // Remove existing TradingView widget
    while (widgetContainer.firstChild) {
        widgetContainer.removeChild(widgetContainer.firstChild);
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.text = JSON.stringify({
        "feedMode": "market",
        "market": "stock",
        "isTransparent": false,
        "displayMode": "regular",
        "width": "350",
        "height": "670",
        "colorTheme": theme,
        "locale": "en"
    });
    widgetContainer.appendChild(script);

}
loadTradingViewNewsWidget('light');