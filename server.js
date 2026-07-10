const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;
const DB_FILE = path.join(__dirname, 'trading_history.json');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Database initializer with $1,000 starting cash capital
function loadDatabase() {
    if (!fs.existsSync(DB_FILE)) {
        const initialData = {
            account: {
                starting_cash: 1000.00,
                current_cash: 1000.00,
                total_profit_loss: 0.00
            },
            recent_trades: []
        };
        fs.writeFileSync(DB_FILE, JSON.stringify(initialData, null, 4));
    }
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
}

function saveDatabase(data) {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 4));
}

// Market Intelligence Engine: Mix of diverse current news event updates
app.get('/api/cycle', (req, res) => {
    let db = loadDatabase();

    const currentMarketRadar = [
        { stock: "AAPL", type: "TECH INNOVATION", headline: "New AI hardware developer tools see record subscription sign-ups this month.", trend: "positive" },
        { stock: "RETAIL_CO", type: "CONSUMER DATA", headline: "Quarterly shopping surveys show a surprising lift in household discretionary spending.", trend: "positive" },
        { stock: "CHIP_MAKER", type: "SUPPLY CHAIN SHIFT", headline: "Nervous semiconductor investors trim positions ahead of upcoming inventory adjustments.", trend: "negative" },
        { stock: "GLOBAL_LOG", type: "MACRO FREIGHT", headline: "Ocean container shipping timelines stretch due to temporary harbor congestion bottlenecks.", trend: "negative" },
        { stock: "BIOMED", type: "REGULATORY RADAR", headline: "Biotech compound passes its final phase panel evaluation window successfully.", trend: "positive" }
    ];

    // Pick a random general market event
    const activeNews = currentMarketRadar[Math.floor(Math.random() * currentMarketRadar.length)];
    
    // Automated bot parameters ($200 per position configuration)
    const positionSize = 200.00; 
    let tradeResult = 0;
    let executionNote = "";

    if (activeNews.trend === "positive") {
        // Positive market momentum hits automatic Take Profit target
        tradeResult = parseFloat((positionSize * (0.06 + Math.random() * 0.12)).toFixed(2));
        executionNote = `🎯 TAKE-PROFIT ENFORCED: Realized momentum upside.`;
    } else {
        // Negative market drag hits automatic safety Stop Loss boundary
        tradeResult = parseFloat((positionSize * -0.04).toFixed(2)); // Strict 4% safety limit
        executionNote = `🛡️ STOP-LOSS TRIGGERED: Exited position early to protect capital pool.`;
    }

    // Adjust wallet cash structures inside the database object
    db.account.current_cash = parseFloat((db.account.current_cash + tradeResult).toFixed(2));
    db.account.total_profit_loss = parseFloat((db.account.current_cash - db.account.starting_cash).toFixed(2));

    // Log the action item for the terminal screen box
    const timeString = new Date().toLocaleTimeString();
    const balanceIndicator = tradeResult >= 0 ? `+$${tradeResult}` : `-$${Math.abs(tradeResult)}`;
    const compiledLog = `[${timeString}] [${activeNews.type}] Bot acted on ${activeNews.stock} -> ${executionNote} [${balanceIndicator}]`;
    
    db.recent_trades.unshift(compiledLog);
    db.recent_trades = db.recent_trades.slice(0, 5); 
    
    saveDatabase(db);

    res.json({
        account: db.account,
        activeNews: activeNews,
        logs: db.recent_trades,
        prices: [
            { symbol: "AAPL", price: (172 + Math.random() * 12).toFixed(2) },
            { symbol: "CHIP_MAKER", price: (202 + Math.random() * 15).toFixed(2) },
            { symbol: "RETAIL_CO", price: (85 + Math.random() * 8).toFixed(2) }
        ]
    });
});

app.listen(PORT, () => console.log(`Server live at http://localhost:3000`));
