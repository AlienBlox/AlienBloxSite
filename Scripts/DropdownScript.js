function DropdownDo() {
    document.getElementById("DropdownItem").classList.toggle("show");
}

window.onclick = function (event) {
    if (!event.target.matches('.DropdownButton')) {
        var dropdowns = document.getElementsByClassName("UIDropDown");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}