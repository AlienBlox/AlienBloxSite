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

function LoadNewsTile(Title, Link, E, ImagePath, Content) {
    try {
        fetch('../Extras/Elements/NewsCore.htm').
            then(response => response.text()).
            then(ElementThing => {
                E.parentNode.innerHTML += ElementThing;
                console.error(E.querySelector('#NewsContainer').querySelector('#NewsBody').querySelector('#NewsTitle'));

            })
            .catch(error => {
                console.error('Error loading element:', error);
            });
    }
    catch (error) {
        console.error('Error in LoadNewsTile:', error);
    }
}