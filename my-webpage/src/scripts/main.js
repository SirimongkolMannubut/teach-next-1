// This file contains the JavaScript code for the webpage. 
// It includes functionality such as event handling and DOM manipulation.

document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('myButton');
    const output = document.getElementById('output');

    button.addEventListener('click', () => {
        output.textContent = 'Button was clicked!';
    });
});