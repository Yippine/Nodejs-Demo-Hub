# Node Js Demo

# 🏧 Node.js ATM Project

## 📜 簡介

歡迎來到 Node.js ATM Project！這是一個創新的自動提款機（ATM）模擬系統，結合了傳統銀行業務與現代技術。我們的專案模擬了基本的 ATM 功能，為使用者提供整合 INI 文件的金融服務體驗。

https://github.com/user-attachments/assets/d82d977e-ea97-48e9-8438-e57b2601ae64

### 🌟 主要特色
- 使用 Node.js 構建的輕量級後端
- 基於 INI 文件的簡單有效的資料儲存
- 直觀的 Web 界面，支援存款、提款和轉帳操作

## 🚀 安裝與運行

按照以下步驟快速啟動專案：

1. **克隆儲存庫**
   ```
   git clone https://github.com/your-username/node-atm-project.git
   cd node-atm-project
   ```

2. **安裝依賴**
   ```
   npm install
   ```

3. **啟動服務器**
   ```
   npm start
   ```

4. **訪問應用**
   打開瀏覽器，訪問 `http://localhost:3000`

## 💡 功能與核心邏輯

### 1. 餘額查詢
- **功能**：即時顯示使用者的當前帳戶餘額
- **核心邏輯**：從`TxATM.ini`文件讀取最新的餘額資料

### 2. 存款
- **功能**：允許使用者向帳戶存入資金
- **核心邏輯**：
  - 驗證存款金額不超過交易限額
  - 更新`TxATM.ini`中的餘額
  - 記錄交易細節

### 3. 提款
- **功能**：允許使用者從帳戶取出資金
- **核心邏輯**：
  - 檢查餘額充足性
  - 確保不超過交易限額
  - 更新`TxATM.ini`中的餘額
  - 記錄交易細節

### 4. 轉帳
- **功能**：支援向其他帳戶轉帳
- **核心邏輯**：
  - 驗證轉帳金額和出帳帳戶
  - 執行與提款相似的餘額和限額檢查
  - 更新出帳帳戶餘額
  - 記錄交易細節（注意：當前版本不更新入帳帳戶）

## ⚙️ 配置文件

### TxATM.ini
```ini
[ATM]
Balance=10000
TransactionLimit=5000
TotalTransactions=0
LastTransactionTime=

[User]
Name=John Doe
AccountNumber=1234567890
TransactionCount=0
```

- `Balance`：當前帳戶餘額
- `TransactionLimit`：單次交易限額
- `TotalTransactions`：ATM 總交易次數
- `LastTransactionTime`：最近一次的交易時間

### TxGPT.ini
```ini
[GPT]
Model=gpt-4
APIKey=your-api-key-here
LastQuery=
QueryCount=0

[User]
Name=John Doe
AccountNumber=1234567890
LastLogin=
```

- `Model`：使用的 GPT 模型版本
- `APIKey`：GPT API 密鑰（請保護好您的密鑰！）
- `LastQuery`：最近一次的 GPT 查詢
- `QueryCount`：GPT 查詢總次數

## ⚠️ 注意事項

1. **安全性**：
   - 這是一個演示專案，不適合用於實際的金融交易。
   - 在生產環境中，請使用更安全的資料儲存方式，而不是 INI 文件。

2. **擴展性**：
   - 當前版本針對單一使用者進行設計。是否支援多位使用者需要進一步開發。

3. **錯誤處理**：
   - 雖然基本的錯誤處理已經實現，但在生產環境中可能需要更全面的錯誤處理機制。

## 🤝 貢獻

我們歡迎所有形式的貢獻！如果你有任何改進想法或發現了 bug，請隨時提出 issue 或提交 pull request。

## 📄 許可證

本專案採用 MIT 許可證。詳情請見 [LICENSE]（LICENSE） 文件。

---

💖 感謝您對 Node.js ATM Project 的關注！如有任何問題，請隨時聯繫我們。祝您使用愉快！🎉
