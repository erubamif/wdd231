export function saveBudgetGoal(goal) {

    localStorage.setItem('budgetGoal', goal);
}

export function getBudgetGoal() {

    return localStorage.getItem('budgetGoal');
}