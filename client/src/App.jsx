import React, { useState } from 'react';

function ExpenseTracker() {
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('credit'); // Default type is credit

  const addTransaction = () => {
    if (!amount || !description) {
      alert('Please enter valid amount and description.');
      return;
    }

    const newTransaction = {
      amount: parseFloat(amount),
      description: description.trim(),
      type: type // Assigning the type of transaction
    };

    setTransactions([...transactions, newTransaction]);
    setAmount('');
    setDescription('');
  };

  const deleteTransaction = (index) => {
    const updatedTransactions = [...transactions];
    updatedTransactions.splice(index, 1);
    setTransactions(updatedTransactions);
  };

  const balance = transactions.reduce((total, transaction) => {
    if (transaction.type === 'credit') {
      return total + transaction.amount;
    } else {
      return total - transaction.amount;
    }
  }, 0);

  return (
    <div>
      <h1>Expense Tracker</h1>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <label htmlFor="description">Description:</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        <label htmlFor="type">Type:</label>
        <select id="type" value={type} onChange={(e) => setType(e.target.value)}>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
        <button onClick={addTransaction}>Add Transaction</button>
      </div>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.description} - {transaction.type === 'credit' ? '+' : '-'} ₹{transaction.amount.toFixed(2)}
            <button onClick={() => deleteTransaction(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <p>Balance: ₹{balance.toFixed(2)}</p>
    </div>
  );
}

export default ExpenseTracker;
