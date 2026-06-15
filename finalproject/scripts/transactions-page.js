import { fetchTransactions }
from './transactions.js';

document.addEventListener('DOMContentLoaded',
async () => {

    const transactions =
        await fetchTransactions();

    displayTransactions(transactions);
});

function displayTransactions(transactions) {

    const container =
        document.querySelector('#allTransactions');

    transactions.forEach(transaction => {

        const card =
            document.createElement('div');

        card.classList.add('transaction-card');

        card.innerHTML = `
            <h3>${transaction.title}</h3>
            <p>Amount: $${transaction.amount}</p>
            <p>Category: ${transaction.category}</p>
            <p>Date: ${transaction.date}</p>
            <p>Type: ${transaction.type}</p>
        `;

        container.appendChild(card);
    });
}