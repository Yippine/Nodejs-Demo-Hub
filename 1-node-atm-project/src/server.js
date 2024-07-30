const express = require("express");
const bodyParser = require("body-parser");
const { getBalance, withdraw, deposit, transfer, getTransactionLimit } = require("./atmOperations");

const app = express();
app.use(bodyParser.json());
app.use(express.static("public"));

app.get("/balance", (req, res) => {
    res.json({ balance: getBalance() });
});

app.get("/transactionLimit", (req, res) => {
    res.json({ limit: getTransactionLimit() });
});

app.post("/withdraw", (req, res) => {
    try {
        const newBalance = withdraw(req.body.amount);
        res.json({ success: true, newBalance });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

app.post("/deposit", (req, res) => {
    try {
        const newBalance = deposit(req.body.amount);
        res.json({ success: true, newBalance });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

app.post("/transfer", (req, res) => {
    try {
        const result = transfer(req.body.amount, req.body.targetAccount);
        const newBalance = getBalance();
        res.json({ success: true, message: result, newBalance });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
