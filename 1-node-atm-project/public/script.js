tailwind.config = {
    theme: {
        extend: {
            colors: {
                wood: {
                    light: "#e6d2b5",
                    DEFAULT: "#d4a373",
                    dark: "#a87e4e",
                },
            },
        },
    },
};

async function updateBalance() {
    const response = await fetch("/balance");
    const data = await response.json();
    document.getElementById("balance").textContent = `$${data.balance}`;
}

async function updateTransactionLimit() {
    const response = await fetch("/transactionLimit");
    const data = await response.json();
    document.getElementById("transactionLimit").textContent = `$${data.limit}`;
}

async function withdraw() {
    const amount = document.getElementById("amount").value;
    const response = await fetch("/withdraw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseInt(amount) }),
    });
    const data = await response.json();
    if (data.success) {
        alert(`Withdrawal successful. New balance: $${data.newBalance}`);
        updateBalance();
    } else {
        alert(`Withdrawal failed: ${data.error}`);
    }
}

async function deposit() {
    const amount = document.getElementById("amount").value;
    const response = await fetch("/deposit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseInt(amount) }),
    });
    const data = await response.json();
    if (data.success) {
        alert(`Deposit successful. New balance: $${data.newBalance}`);
        updateBalance();
    } else {
        alert(`Deposit failed: ${data.error}`);
    }
}

async function transfer() {
    const amount = document.getElementById("amount").value;
    const targetAccount = document.getElementById("targetAccount").value;
    const response = await fetch("/transfer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: parseInt(amount), targetAccount }),
    });
    const data = await response.json();
    if (data.success) {
        alert(`${data.message}. New balance: $${data.newBalance}`);
        updateBalance();
    } else {
        alert(`Transfer failed: ${data.error}`);
    }
}

updateBalance();
updateTransactionLimit();
