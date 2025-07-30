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