//Literally just a script to make the menu work, nothing else.
function HideOrShowUI(ID) {
    var element = document.getElementById(ID);
    if (element) {
        if (element.style.display === "none") {
            element.style.display = "block";
        }
        else {
            element.style.display = "none";
        }
    }
}

function ToggleUISiblingInstance(object, ID) {
    const parent = targetElement.parentNode;
    const siblings = Array.from(parent.children);
    const siblingNodes = siblings.filter(el => el !== targetElement);

    siblingNodes.forEach(sibling => {
        if (sibling.id === ID) {
            if (sibling.style.display === "none") {
                sibling.style.display = "block";
            } else {
                sibling.style.display = "none";
            }
        }
    });
}

function DestroyUI(ID) {
    var element = document.getElementById(ID);
    if (element) {
        element.remove();
    }
}

function ImageError(image) {
    image.onerror = null;
    image.src = 'Images/Main/Fallback.png';
    image.style.backgroundColor = "#654321";
}

function ImageErrorPages(image) {
    image.onerror = null;
    image.src = '../Images/Main/Fallback.png';
    image.style.backgroundColor = "#654321";
}

function LinkTo(Link) {
    window.location.href = Link;
}