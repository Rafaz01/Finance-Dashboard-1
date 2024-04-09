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
                description: "Berkshire Hathaway",
                proName: "NYSE:BRK.B"
            },
            {
                description: "AMD",
                proName: "NASDAQ:AMD"
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
        loadTradingViewWidget('light'); // Load light theme
    } else {
        body.classList.add('dark-theme');
        loadTradingViewWidget('dark'); // Load dark theme
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
    themeToggler.querySelector('span').classList.toggle('active');
});

