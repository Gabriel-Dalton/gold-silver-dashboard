document.getElementById('calculate-btn').addEventListener('click', async function() {
    // Get the number of each type of bars/coins from user input
    const goldBars = parseInt(document.getElementById('gold-bars').value) || 0; // 1 oz gold bars
    const silverRoundsUSA = parseInt(document.getElementById('silver-rounds-usa').value) || 0; // 1 oz silver rounds (USA)
    const silverMapleLeaf = parseInt(document.getElementById('silver-maple-leaf').value) || 0; // 1 oz silver maple leaf
    const silverBarsUSA = parseInt(document.getElementById('silver-bars-usa').value) || 0; // 10 oz silver bars (USA)
    const silverKgBars = parseInt(document.getElementById('silver-kg-bars').value) || 0; // 1 kg silver bars
    const silverBarsRCM = parseInt(document.getElementById('silver-bars-rcm').value) || 0; // 10 oz silver bars (RCM)

    try {
        const prices = await Promise.all([
            fetchPrice('https://corsproxy.io/?https%3A%2F%2Fwww.vbce.ca%2Fgold-silver%2F1-1-oz-gold-bar'),
            fetchPrice('https://corsproxy.io/?https%3A%2F%2Fwww.vbce.ca%2Fgold-silver%2F46-1-oz-silver-round'),
            fetchPrice('https://corsproxy.io/?https%3A%2F%2Fwww.vbce.ca%2Fgold-silver%2F142-1-oz-silver-maple-leaf-2023'),
            fetchPrice('https://corsproxy.io/?https%3A%2F%2Fwww.vbce.ca%2Fgold-silver%2F50-10-oz-silver-bar'),
            fetchPrice('https://corsproxy.io/?https%3A%2F%2Fwww.vbce.ca%2Fgold-silver%2F13-1-kilo-silver-bar'),
            fetchPrice('https://corsproxy.io/?https%3A%2F%2Fwww.vbce.ca%2Fgold-silver%2F121-10-oz-silver-bar-royal-canadian-mint')
        ]);

        // Calculate total value for each type
        const totalGoldValue = goldBars * prices[0];
        const totalSilverRoundsValue = silverRoundsUSA * prices[1];
        const totalSilverMapleLeafValue = silverMapleLeaf * prices[2];
        const totalSilverBarsUSAValue = silverBarsUSA * prices[3];
        const totalSilverKgBarsValue = silverKgBars * prices[4];
        const totalSilverBarsRCMValue = silverBarsRCM * prices[5];

        // Calculate total value of all holdings
        const totalValue = totalGoldValue + totalSilverRoundsValue + totalSilverMapleLeafValue + totalSilverBarsUSAValue + totalSilverKgBarsValue + totalSilverBarsRCMValue;

        // Display results
        document.getElementById('results').innerHTML = `
            <p>Gold Value: $${totalGoldValue.toFixed(2)} CAD</p>
            <p>1 oz Silver Round USA Value: $${totalSilverRoundsValue.toFixed(2)} CAD</p>
            <p>1 oz Silver Maple Leaf Value: $${totalSilverMapleLeafValue.toFixed(2)} CAD</p>
            <p>10 oz Silver Bar USA Value: $${totalSilverBarsUSAValue.toFixed(2)} CAD</p>
            <p>1 kg Silver Bar Value: $${totalSilverKgBarsValue.toFixed(2)} CAD</p>
            <p>10 oz Silver Bar RCM Value: $${totalSilverBarsRCMValue.toFixed(2)} CAD</p>
            <p>Total Value: $${totalValue.toFixed(2)} CAD</p>
        `;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('results').textContent = 'Error fetching data. Please try again later.';
    }
});

// Helper function to fetch price based on URL and CSS selector
async function fetchPrice(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to fetch price from ${url}: ${response.status}`);
    }
    const htmlText = await response.text();
    const doc = new DOMParser().parseFromString(htmlText, 'text/html');
    
    // Use the correct CSS selector to target the price element
    const priceElement = doc.querySelector("#__next > div.container > section > div > div.column.p-0 > div:nth-child(2) > div:nth-child(2)");
    
    if (!priceElement) {
        throw new Error("Unable to find price data on the page.");
    }
    return parseFloat(priceElement.textContent.replace(/[^0-9.-]+/g, ""));
}

