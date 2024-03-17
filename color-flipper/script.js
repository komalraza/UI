const colors = ["green", "red","yellow","teal","blue","gray","pink", "rgba(133,122,200)", "#F15025"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  console.log(document.body);

  // Get Random Number between Zero-three
  const randomNo = generateRandomNumber();
  console.log(randomNo);

  document.body.style.backgroundColor = colors[randomNo];
  color.textContent = colors[randomNo];
});

// Generate Random Number

const generateRandomNumber = () => {
  return Math.floor(Math.random() * colors.length);
};
