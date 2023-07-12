console.log("cobain");

let hamburgerIsOpen = false;

function openHamburger() {
  let hamburgerContainer = document.getElementById("hamburger");
  if (!hamburgerIsOpen) {
    hamburgerContainer.style.display = "flex";
    hamburgerIsOpen = true;
  } else {
    hamburgerContainer.style.display = "none";
    hamburgerIsOpen = false;
  }
}
