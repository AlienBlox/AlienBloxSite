// This file contains functions to insert elements into the page dynamically.
function LoadElement(ElementFilePath, AtElement) {
    fetch(ElementFilePath)
        .then(response => response.text())
        .then(html => {
            document.getElementById(AtElement).innerHTML += html;
        })
        .catch(error => {
            console.error('Error loading element:', error);

        });
}