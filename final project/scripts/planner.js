import {
    saveBudgetGoal,
    getBudgetGoal
}
from './storage.js';

const form =
document.querySelector('#goalForm');

const display =
document.querySelector('#goalDisplay');

const currentGoal =
getBudgetGoal();

if (currentGoal) {
    display.textContent =
        `Current Goal: $${currentGoal}`;
}

form.addEventListener('submit',
event => {

    event.preventDefault();

    const goal =
    document.querySelector('#goal').value;

    saveBudgetGoal(goal);

    display.textContent =
    `Current Goal: $${goal}`;

    form.reset();
});
