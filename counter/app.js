let countVal = 0;

const count = document.querySelector("#count");
const btns = document.querySelectorAll(".btn"); //get all btn classes elements

// Looping through all the elements of btns list  and add event listeners

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const actionButton = e.currentTarget.classList;

    if (actionButton.contains("btn-dec")) {
      countVal--;
      
    } else if (actionButton.contains("btn-res")) {
      countVal = 0;
    } else if (actionButton.contains("btn-inc")) {
      countVal++;
    }
    if (countVal > 0) {
      count.style.color = "green";
    } else if (countVal < 0) {
      count.style.color = "red";
    } else {
      count.style.color = "blueviolet";
    }
    count.textContent = countVal;
  });
});
