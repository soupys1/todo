import './styles.css';
import card from './card.js';

document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>Todo List</h1>';

    // Initialize the card functionality
    card();
});
