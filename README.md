# 🤖 My Auto Screener Bot

An automated, real-time trading screener and market intelligence pipeline built with **Node.js, Express, and Vanilla HTML/CSS/JS**. 

This application uses a localized background processing engine to evaluate macroeconomic and product catalyst news headlines, dynamically executing algorithmic trade risk structures (Take-Profit/Stop-Loss parameters) to protect and grow a simulated portfolio capital base.

---

## 📊 Core Architectural Features

* **Market Intelligence Engine:** Simulates active monitoring of broad market-moving events like corporate earnings announcements, regulatory adjustments, consumer trends, and supply chain constraints.
* **Algorithmic Capital Safeguards:** Hard-coded protective boundaries including an automated **Stop-Loss** mechanism (strict 4% capital cap) and momentum-based **Take-Profit** target locking parameters.
* **Persistent Lightweight Database:** Uses a native, schema-less `JSON text file database` to log portfolio values, available liquid cash balances, and execution statistics permanently across server reboots.
* **Asynchronous Live Feed:** Features an dynamic JavaScript frontend polling cycle (`asynchronous fetch pipeline`) that streams background state changes onto a soft pastel interface every 5 seconds without screen blinks.

---

## 🛠️ Local Installation & Launch Sequence

To run this automated dashboard workspace locally on your machine, follow these configurations:

1. **Clone or download** this repository to your machine.
2. Ensure you have **Node.js** installed on your operating environment.
3. Open your project terminal directory inside VS Code and install the core web application dependencies:
   ```bash
   npm install express
   ```
4. Fire up the background server pipeline engine:
   ```bash
   node server.js
   ```
5. Launch your browser window and navigate to the active local channel interface:
   ```text
   http://localhost:3000
   ```

---

## 📂 Project Architecture Mapping

* `server.js` - Holds the primary Express framework backend app router, file system read/write management loops, and simulated news event payload calculators.
* `index.html` - The soft pastel-styled dashboard client screen interface rendering dynamic state metrics, logs, and simulated ticker price data.
* `trading_history.json` - Safe ledger datastore schema initialized automatically to track your starting $1,000 cash balance equity pool.
* `package.json` - Defines project environment operational scripts and manifest dependency tree mappings.
