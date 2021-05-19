

function mobileNav() {
    var x = document.getElementById("menuNav");
    if (x.className === "menunav") {
        x.className += " responsive";
    } else {
        x.className = "menunav";
    }
}

