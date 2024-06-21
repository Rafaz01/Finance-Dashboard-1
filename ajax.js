// Function to fetch stock market data for Apple, Microsoft, Nvidia Tesla and Bitcoin
    // 
    function fetchStockData() {
        git add ajax.js
        git commit --amend 
        git push --all --force
        git push --tags --force
        const symbols = ['AAPL', 'MSFT','NVDA','TSLA'];
        const apiUrl = `https://financialmodelingprep.com/api/v3/quote/${symbols.join(',')}?apikey=${apiKey}`;
  
        fetch(apiUrl)
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch stock data');
            }
            return response.json();
          })
          .then(data => {
            // Display fetched data on the page
            let stockInfo = '';
            data.forEach(stock => {
              stockInfo += `
                  <div class="badge">
                  <h1>${stock.symbol}</h1>
                  
                  <h2>Price: $${stock.price}</h2>
                </div>
              `;
            });
            document.getElementById('stockData').innerHTML = stockInfo;
          })
          .catch(error => {
            console.error('Error fetching stock data:', error);
            document.getElementById('stockData').innerHTML = 'Failed to fetch stock data. Please try again.';
          });
      }
  
      // Function to fetch current Bitcoin price
      function fetchBitcoinPrice() {
        fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Failed to fetch Bitcoin price');
            }
            return response.json();
          })
          .then(data => {
            // Display fetched data on the page
            const btcPrice = `
            <div class="btc-badge">
              <h1>(BTC)</h1>
              <h2>Price: $${data.bpi.USD.rate}</h2>
              </div>
            `;
            document.getElementById('btcPrice').innerHTML = btcPrice;
          })
          .catch(error => {
            console.error('Error fetching Bitcoin price:', error);
            document.getElementById('btcPrice').innerHTML = 'Failed to fetch Bitcoin price. Please try again.';
          });
      }
  
      // Event listener for the Fetch Data button
      document.getElementById('fetchData').addEventListener('click', () => {
        fetchStockData();
        fetchBitcoinPrice();
      });
      
  
      
