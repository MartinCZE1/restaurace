const startButton = document.getElementById("startButton");
const orderButton = document.getElementById("orderButton");

let orderNumber = 0;

startButton.onclick = () => {
  start.style.display = "none";
  startButton.style.display = "none";
  restaurant.style.display = "block";
  ingredients.style.display = "inline-block";
  table.style.display = "inline-block";
  order.style.display = "inline-block";
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
  } else if (orderNumber == 4) {
    console.log("rand 4");
  } else if (orderNumber == 5) {
    console.log("rand 5");
  } else {
    console.log("nasjkdha")
  }
}

orderButton.onclick = () => {
  orderList();
};

