# Node.js ATM Project

This project demonstrates a simple ATM application using Node.js, Express, and INI files for configuration.

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Start the server:
   ```
   npm start
   ```

3. Open a web browser and navigate to `http://localhost:3000` to use the ATM interface.

## Features

- View balance
- Withdraw funds
- Deposit funds
- Transfer funds

## Configuration

The application uses two INI files for configuration:

- `config/TxATM.ini`: Contains ATM-related data
- `config/TxGPT.ini`: Contains GPT-related data (for future integration)

## Note

This is a simplified demonstration and does not include proper security measures or error handling that would be necessary in a real-world application.