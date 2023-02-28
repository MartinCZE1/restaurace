const startButton = document.getElementById("startButton");
const story = document.getElementById("story");
const storyEnd = document.getElementById("storyEnd");

const orderButton = document.getElementById("orderButton");
const orderHam = document.getElementById("orderHam");
const orderCheese = document.getElementById("orderCheese");
const orderSalam = document.getElementById("orderSalam");
const orderMushroom = document.getElementById("orderMushroom");
const orderPineapple = document.getElementById("orderPineapple");

const pineapple = document.getElementById("pineapple");
const mushroom = document.getElementById("mushroom");
const salam = document.getElementById("salam");
const cheese = document.getElementById("cheese");
const ham = document.getElementById("ham");
const sauce = document.getElementById("sauce");
const dough = document.getElementById("dough");

const pineappleCounter = document.getElementById("pineappleCounter");
const mushroomCounter = document.getElementById("mushroomCounter");
const salamCounter = document.getElementById("salamCounter");
const cheeseCounter = document.getElementById("cheeseCounter");
const hamCounter = document.getElementById("hamCounter");
const sauceCounter = document.getElementById("sauceCounter");
const doughCounter = document.getElementById("doughCounter");

const cookButton = document.getElementById("cookButton");
const cookCounter = document.getElementById("cookCounter");
const sell = document.getElementById("sell");

let orderNumber = 0;

let pineappleCount = 0;
let mushroomCount = 0;
let salamCount = 0;
let cheeseCount = 0;
let hamCount = 0;
let sauceCount = 0;
let doughCount = 0;

let cookCount = 15;

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
  orderNumber = Math.floor(Math.random() * 5) + 1;
  if (orderNumber == 1) {
    console.log(1);
    ham.addEventListener("click", hamClick);
    sauce.addEventListener("click", sauceClick);
    dough.addEventListener("click", doughClick);
    cheese.removeEventListener("click", cheeseClick);
    salam.removeEventListener("click", salamClick);
    mushroom.removeEventListener("click", mushroomClick);
    pineapple.removeEventListener("click", pineappleClick);
    orderHam.style.display = "block";
    orderCheese.style.display = "none";
    orderSalam.style.display = "none";
    orderMushroom.style.display = "none";
    orderPineapple.style.display = "none";
    tableInfo.style.marginTop = "-200px";
  } else if (orderNumber == 2) {
    console.log(2);
    sauce.addEventListener("click", sauceClick);
    dough.addEventListener("click", doughClick);
    cheese.addEventListener("click", cheeseClick);
    ham.removeEventListener("click", hamClick);
    salam.removeEventListener("click", salamClick);
    mushroom.removeEventListener("click", mushroomClick);
    pineapple.removeEventListener("click", pineappleClick);
    orderCheese.style.display = "block";
    orderHam.style.display = "none";
    orderSalam.style.display = "none";
    orderMushroom.style.display = "none";
    orderPineapple.style.display = "none";
    tableInfo.style.marginTop = "-200px";
  } else if (orderNumber == 3) {
    console.log(3);
    sauce.addEventListener("click", sauceClick);
    dough.addEventListener("click", doughClick);
    salam.addEventListener("click", salamClick);
    cheese.removeEventListener("click", cheeseClick);
    ham.removeEventListener("click", hamClick);
    mushroom.removeEventListener("click", mushroomClick);
    pineapple.removeEventListener("click", pineappleClick);
    orderSalam.style.display = "block";
    orderHam.style.display = "none";
    orderCheese.style.display = "none";
    orderMushroom.style.display = "none";
    orderPineapple.style.display = "none";
    tableInfo.style.marginTop = "-200px";
  } else if (orderNumber == 4) {
    console.log(4);
    sauce.addEventListener("click", sauceClick);
    dough.addEventListener("click", doughClick);
    mushroom.addEventListener("click", mushroomClick);
    cheese.removeEventListener("click", cheeseClick);
    ham.removeEventListener("click", hamClick);
    salam.removeEventListener("click", salamClick);
    pineapple.removeEventListener("click", pineappleClick);
    orderCheese.style.display = "none";
    orderHam.style.display = "none";
    orderSalam.style.display = "none";
    orderMushroom.style.display = "block";
    orderPineapple.style.display = "none";
    tableInfo.style.marginTop = "-200px";
  } else if (orderNumber == 5) {
    console.log(5);
    sauce.addEventListener("click", sauceClick);
    dough.addEventListener("click", doughClick);
    pineapple.addEventListener("click", pineappleClick);
    cheese.removeEventListener("click", cheeseClick);
    ham.removeEventListener("click", hamClick);
    salam.removeEventListener("click", salamClick);
    mushroom.removeEventListener("click", mushroomClick);
    orderCheese.style.display = "none";
    orderHam.style.display = "none";
    orderSalam.style.display = "none";
    orderMushroom.style.display = "none";
    orderPineapple.style.display = "block";
    tableInfo.style.marginTop = "-200px";
  }
  orderButton.innerHTML = "Další objednávka";
}

orderButton.onclick = () => {
  orderList();
};

function pineappleClick() {
  pineappleCount++;
  pineappleCounter.innerHTML = `${pineappleCount}`;
}

function mushroomClick() {
  mushroomCount++;
  mushroomCounter.innerHTML = `${mushroomCount}`;
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

cookButton.addEventListener("click", cookClick);

if (orderNumber == 1 && (doughCount == 0 || sauceCount == 0 || hamCount == 0)) {
  cookButton.removeEventListener("click", cookClick);
}

function cookClick() {
  restaurant.style.display = "none";
  furnace.style.display = "block";
  furnace.style.backgroundImage = "url(./res/img/furnace.jpg)";
  cookInterval = setInterval(() => {
    cookCount--;
    cookCounter.innerHTML = `Doba pečení: ${cookCount}`;
    if (cookCount == 0) {
      clearInterval(cookInterval);
      sell.style.display = "block"; 
    }
  }, 1000);
}

sell.onclick = () => {
  furnace.style.display = "none";
  restaurant.style.display = "block";
  cookCount = 15;
  orderHam.style.display = "none";
  orderCheese.style.display = "none";
  orderSalam.style.display = "none";
  tableInfo.style.marginTop = "200px";
  sell.style.display = "none";
};
