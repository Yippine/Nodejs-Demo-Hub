const { readFromINI, updateMultipleINI } = require("./iniOperations");
const ATM_CONFIG_PATH = "./config/TxATM.ini";
const GPT_CONFIG_PATH = "./config/TxGPT.ini";

function getBalance() {
    return parseInt(readFromINI("ATM", "Balance", ATM_CONFIG_PATH));
}

function getTransactionLimit() {
    return parseInt(readFromINI("ATM", "TransactionLimit", ATM_CONFIG_PATH));
}

function updateATMState(amount, operation) {
    const currentBalance = getBalance();
    const newBalance = currentBalance + amount;
    const totalTransactions = parseInt(readFromINI("ATM", "TotalTransactions", ATM_CONFIG_PATH)) + 1;
    const userTransactionCount = parseInt(readFromINI("User", "TransactionCount", ATM_CONFIG_PATH)) + 1;

    const updates = [
        { filePath: ATM_CONFIG_PATH, section: "ATM", key: "Balance", value: newBalance.toString() },
        { filePath: ATM_CONFIG_PATH, section: "ATM", key: "TotalTransactions", value: totalTransactions.toString() },
        { filePath: ATM_CONFIG_PATH, section: "ATM", key: "LastTransactionTime", value: new Date().toISOString() },
        { filePath: ATM_CONFIG_PATH, section: "User", key: "TransactionCount", value: userTransactionCount.toString() },
        { filePath: GPT_CONFIG_PATH, section: "User", key: "LastLogin", value: new Date().toISOString() },
        { filePath: GPT_CONFIG_PATH, section: "GPT", key: "LastQuery", value: `User performed ${operation} of ${amount}` },
        { filePath: GPT_CONFIG_PATH, section: "GPT", key: "QueryCount", value: (parseInt(readFromINI("GPT", "QueryCount", GPT_CONFIG_PATH)) + 1).toString() },
    ];

    updateMultipleINI(updates);
    return newBalance;
}

function withdraw(amount) {
    const balance = getBalance();
    const limit = getTransactionLimit();
    if (amount > balance) {
        throw new Error("Insufficient funds");
    }
    if (amount > limit) {
        throw new Error(`Transaction limit exceeded. Maximum allowed: ${limit}`);
    }
    return updateATMState(-amount, "withdrawal");
}

function deposit(amount) {
    const limit = getTransactionLimit();
    if (amount > limit) {
        throw new Error(`Transaction limit exceeded. Maximum allowed: ${limit}`);
    }
    return updateATMState(amount, "deposit");
}

function transfer(amount, targetAccount) {
    const balance = getBalance();
    const limit = getTransactionLimit();
    if (amount > balance) {
        throw new Error("Insufficient funds");
    }
    if (amount > limit) {
        throw new Error(`Transaction limit exceeded. Maximum allowed: ${limit}`);
    }
    updateATMState(-amount, "transfer");
    // In a real scenario, you'd update the target account's balance here
    return `Transferred ${amount} to account ${targetAccount}`;
}

module.exports = { getBalance, withdraw, deposit, transfer, getTransactionLimit };
