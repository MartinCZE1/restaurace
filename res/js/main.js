const startButton = document.getElementById("startButton");
const story = document.getElementById("story");
const storyEnd = document.getElementById("storyEnd");
const orderButton = document.getElementById("orderButton");
const ingredients = document.getElementById("ingredients");



let orderNumber = 0;
var dragItem = null;

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
  ingredients.style.display = "inline-block";
  table.style.display = "inline-block";
  order.style.display = "inline-block";
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

//Zde se vloží sestavené menu místo rand 1, 2, 3, 4, 5
function orderList() {
  orderNumber = Math.floor(Math.random() * 5) + 1;
  if (orderNumber == 1) {
    console.log("rand 1");
  } else if (orderNumber == 2) {
    console.log("rand 2");
  } else if (orderNumber == 3) {
    console.log("rand 3");
  }
}

orderButton.onclick = () => {
  orderList();
};
