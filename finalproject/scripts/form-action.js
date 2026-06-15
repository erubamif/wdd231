const params = new URLSearchParams(window.location.search);

const goal = params.get('goal');

document.querySelector('#goalResult').textContent =
    goal ? `$${goal}` : 'No goal submitted';