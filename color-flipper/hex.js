const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");


btn.addEventListener("click", () => {
  console.log(document.body);
  let hexColor = "#"; //append at the start of the hex color string

  for (let i = 0; i < 6; i++) {
    hexColor += hex[generateRandomHexColor()];
  }

  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// Genrate Random Hex Colors

function generateRandomHexColor() {
  return Math.floor(Math.random() * hex.length);
}
