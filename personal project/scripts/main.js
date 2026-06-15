import { fetchTransactions } from './transactions.js';
import { initializeMenu } from './utils.js';

document.addEventListener('DOMContentLoaded', async () => {
    initializeMenu();

    try {
        const transactions = await fetchTransactions();

        displaySummary(transactions);
        displayRecentTransactions(transactions);

    } catch (error) {
        console.error('Error loading data:', error);
    }
});

function displaySummary(transactions) {

    const income = transactions
        .filter(item => item.type === 'Income')
        .reduce((sum, item) => sum + item.amount, 0);

    const expenses = transactions
        .filter(item => item.type === 'Expense')
        .reduce((sum, item) => sum + item.amount, 0);

    const balance = income - expenses;

    document.querySelector('#income').textContent =
        `$${income.toFixed(2)}`;

    document.querySelector('#expenses').textContent =
        `$${expenses.toFixed(2)}`;

    document.querySelector('#balance').textContent =
        `$${balance.toFixed(2)}`;
}

function displayRecentTransactions(transactions) {

    const container = document.querySelector('#recentTransactions');

    container.innerHTML = '';

    transactions.slice(0, 6).forEach(transaction => {

        const card = document.createElement('div');

        card.classList.add('transaction-card');

        card.innerHTML = `
            <h3>${transaction.title}</h3>
            <p>Amount: $${transaction.amount}</p>
            <p>Category: ${transaction.category}</p>
            <p>Date: ${transaction.date}</p>
        `;

        card.addEventListener('click', () => {
            showModal(transaction);
        });

        container.appendChild(card);
    });
}

function showModal(transaction) {

    const modal = document.querySelector('#transactionModal');
    const content = document.querySelector('#modalContent');

    content.innerHTML = `
        <h2>${transaction.title}</h2>
        <p><strong>Amount:</strong> $${transaction.amount}</p>
        <p><strong>Category:</strong> ${transaction.category}</p>
        <p><strong>Date:</strong> ${transaction.date}</p>
        <p><strong>Type:</strong> ${transaction.type}</p>
    `;

    modal.showModal();

    document.querySelector('#closeModal').addEventListener('click', () => {
        modal.close();
    });
}