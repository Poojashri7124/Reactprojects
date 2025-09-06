import { useState } from "react";
import './ExpenseTracker.css';
export default function ExpenseTracker() {
  const [expenses, setExpenses] = useState([]);
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleAddExpense = (e) => {
    e.preventDefault();
    if (!title || !amount || !date) return;

    const newExpense = {
      id: Date.now(),
      title,
      amount: parseFloat(amount),
      date,
    };
    setExpenses([...expenses, newExpense]);
    setTitle("");
    setAmount("");
    setDate("");
  };

  const handleDelete = (id) => {
    setExpenses(expenses.filter((expense) => expense.id !== id));
  };

  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="app-container">
      <div className="tracker-box">
        <h1 className="heading">Expense Tracker</h1>

        
        <form onSubmit={handleAddExpense} className="expense-form">
          <input
            type="text"
            placeholder="Expense Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-field"
          />
          <br />
          <input
            type="number"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="input-field"
          />
          <br />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="input-field"
          />
          <br />
          <button type="submit" className="add-btn">
            Add Expense
          </button>
        </form>

        <br />

        
        <ul className="expense-list">
          {expenses.map((expense) => (
            <li key={expense.id} className="expense-item">
              <div>
                <p className="expense-title">{expense.title}</p>
                <p className="expense-date">{expense.date}</p>
              </div>
              <div>
                <span className="expense-amount">₹{expense.amount}</span>
                <button
                  onClick={() => handleDelete(expense.id)}
                  className="delete-btn"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
 
        <div className="total-box">
          Total Spent: <span className="total-amount">₹{total}</span>
        </div>
      </div>
    </div>
  );
}
