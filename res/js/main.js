const startButton = document.getElementById("startButton");

startButton.onclick = () => {
  start.style.display = "none";
  startButton.style.display = "none"
  restaurant.style.display = "block";
  ingredients.style.display = "inline-block";
  table.style.display = "inline-block";
  order.style.display = "inline-block";
};
