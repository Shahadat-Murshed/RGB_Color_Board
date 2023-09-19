const container = document.getElementById("container");

var colors = [
  "#1d5879",
  "#ef6262",
  "#f3aa60",
  "#37e205",
  "#590696",
  "#c70a80",
  "#fbcb0a",
  "#ff1700",
];

var squares = 400;

for (let i = 0; i < squares; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  var color = randomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 3px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 3px";
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
