// Function of Dropdown the content in mobile Version
function dropdown() {
    var x = document.querySelector(".drop-container");
    var y = document.querySelector("#dropbtn");

    // If the Responsive class not yet then add it oterwise remove
    if (x.className == "drop-container") {

        // Mobile Version When The Click Menu That Convert into X
        x.className += " responsive";
        y.firstChild.innerHTML = "&#10005;";
    } else {

        // else it convert into menu icon
        x.className = "drop-container";
        y.firstChild.innerHTML = "&#9776;";
    }
}