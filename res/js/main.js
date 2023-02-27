const startButton = document.getElementById("startButton");
const story = document.getElementById("story");
const storyEnd = document.getElementById("storyEnd");

const orderButton = document.getElementById("orderButton");
const orderHam = document.getElementById("orderHam");
const orderCheese = document.getElementById("orderCheese");
const orderSalam = document.getElementById("orderSalam");

const salam = document.getElementById("salam");
const cheese = document.getElementById("cheese");
const ham = document.getElementById("ham");
const sauce = document.getElementById("sauce");
const dough = document.getElementById("dough");

const salamCounter = document.getElementById("salamCounter");
const cheeseCounter = document.getElementById("cheeseCounter");
const hamCounter = document.getElementById("hamCounter");
const sauceCounter = document.getElementById("sauceCounter");
const doughCounter = document.getElementById("doughCounter");

let orderNumber = 0;

let salamCount = 0;
let cheeseCount = 0;
let hamCount = 0;
let sauceCount = 0;
let doughCount = 0;

startButton.onclick = () => {
  start.style.display = "none";
  startButton.style.display = "none";
  story.style.display = "block";
  storyEnd.style.display = "flex";
};

storyEnd.onclick = () => {
  story.style.display = "none";
  storyEnd.style.display = "none";
  restaurant.style.display = "block";
};

window.onload = async () => {
  try {
    const file = await fetch("./res/data/storyline.json");
    const data = await file.json();
    console.log(data);
    data.story.forEach((line) => {
      story.innerHTML += `
         ${line.one}
         ${line.two}
         ${line.three}
         ${line.four}
         ${line.five}
         ${line.six}
        `;
    });
  } catch (err) {
    console.log(err);
  }
};

function orderList() {
  orderNumber = Math.floor(Math.random() * 3) + 1;
  if (orderNumber == 1) {
    ham.addEventListener("click", hamClick);
    sauce.addEventListener("click", sauceClick);
    dough.addEventListener("click", doughClick);
    cheese.removeEventListener("click", cheeseClick);
    salam.removeEventListener("click", salamClick);
    orderHam.style.display = "block";
    orderCheese.style.display = "none";
    orderSalam.style.display = "none";
  } else if (orderNumber == 2) {
    sauce.addEventListener("click", sauceClick);
    dough.addEventListener("click", doughClick);
    cheese.addEventListener("click", cheeseClick);
    ham.removeEventListener("click", hamClick);
    salam.removeEventListener("click", salamClick);
    orderCheese.style.display = "block";
    orderHam.style.display = "none";
    orderSalam.style.display = "none";
  } else if (orderNumber == 3) {
    sauce.addEventListener("click", sauceClick);
    dough.addEventListener("click", doughClick);
    salam.addEventListener("click", salamClick);
    cheese.removeEventListener("click", cheeseClick);
    ham.removeEventListener("click", hamClick);
    orderSalam.style.display = "block";
    orderHam.style.display = "none";
    orderCheese.style.display = "none";
  }
}

function salamClick() {
  salamCount++;
  salamCounter.innerHTML = `${salamCount}`;
}

function cheeseClick() {
  cheeseCount++;
  cheeseCounter.innerHTML = `${cheeseCount}`;
}

function hamClick() {
  hamCount++;
  hamCounter.innerHTML = `${hamCount}`;
}

function sauceClick() {
  sauceCount++;
  sauceCounter.innerHTML = `${sauceCount}`;
}

function doughClick() {
  doughCount++;
  doughCounter.innerHTML = `${doughCount}`;
}

orderButton.onclick = () => {
  orderList();
};
