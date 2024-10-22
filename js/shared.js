/*Hamburguer menu*/

const navList = document.getElementById("navList");
const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");

if (toggle) {
  toggle.addEventListener("click", toggleMenu, false);
}

let isMenuOpen = false;
function toggleMenu() {
  if (!isMenuOpen) {
    navList.classList.add("open");
    toggle.classList.add("open");
  } else {
    navList.classList.remove("open");
    toggle.classList.remove("open");
  }
  isMenuOpen = !isMenuOpen;
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

/*Range inputs*/
const rangeInputs = document.querySelectorAll('.range-input')
const numberInput = document.querySelector('.range-number')

const changeInputRangeBackground = (input, value) => {
  const min = input.min;
  const max = input.max;
  input.style.backgroundSize = calculateInputRange(value, min, max);
}

const calculateInputRange = (val, min, max) => {
  const result = (val - min) * 100 / (max - min);
  const hasPositiveValue = result > 0 ? result : 0;
  return hasPositiveValue + '% 100%';
}

function handleInputChange(e) {
  let target = e.target 
  const min = target.min
  const max = target.max
  const val = target.value

  target.style.backgroundSize = calculateInputRange(val, min, max);
}

rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})

numberInput.addEventListener('input', handleInputChange)


