/*Hamburguer menu*/

const menu = document.getElementById("nav");
const toggle = document.getElementById("toggle");
const navList = document.querySelectorAll("#nav li");

const dropdown = document.getElementById("account-dropdown-list");
const dropdownButton = document.getElementById("account-dropdown-button");

if (toggle) {
  toggle.addEventListener("click", toggleMenu, false);
}

if (dropdownButton) {
  dropdownButton.addEventListener("click", dropdownToggle, false);
}

let isMenuOpen = false;
function toggleMenu() {
  if (!isMenuOpen) {
    menu.classList.add("open");
    toggle.classList.add("open");
  } else {
    menu.classList.remove("open");
    toggle.classList.remove("open");
  }
  isMenuOpen = !isMenuOpen;
}

let isDropdownOpen = false;
function dropdownToggle() {
  if (!isDropdownOpen) {
    dropdown.classList.add("open");
    dropdownButton.setAttribute("aria-expanded", "true");
  } else {
    dropdown.classList.remove("open");
    dropdownButton.setAttribute("aria-expanded", "false");
  }
  isDropdownOpen = !isDropdownOpen;
}


/*Submit*/
const form = document.getElementById("form");
const feedback = document.getElementById("feedback");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  feedback.classList.remove("hidden");
});

/*Food type*/
const foodType = ["Italiana", "India","Americana", "Mexicana", "Japonesa", "Coreana", "Pastelería", "Cafetería", "Tapas", "China", "Pizza", "Hamburguesa", "Vietnamita", "Portuguesa",
  "Vegana", "Vegetariana", "Vietnamita", "Peruana", "India", "Tailandesa", "Gourmet", "Fusión", "Catering", "Otro", "Heladería", "Latinoamericana", "Española", "Griega"];

const foodSelect = document.getElementById("foodType");

const foodTypeOrderes = foodType.sort();
foodTypeOrderes.forEach((food) => {
    let option = document.createElement("option");
    option.value = food;
    option.innerHTML = food;
    foodSelect.appendChild(option);
});

