const reviewsList = [
  {
    id: 1,
    name: "Honge Lun",
    job: "Civil Enginner",
    img: "https://plus.unsplash.com/premium_photo-1709865803790-1d929a9386b9?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Partnering with best-in-class technology is critical to both our and our clients’, success. That’s why we value our partnership with REVIEWS.io so greatly. As a platform, their social proofing tools are seriously impressive and are proven to boost sales and build lasting customer loyalty. As a partner, the REVIEWS.io team is super knowledgeable. ",
  },
  {
    id: 2,
    name: "Laura ",
    job: "DevOps Engineer",
    img: "https://images.unsplash.com/photo-1710268503380-7f87a599d15b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNDh8fHxlbnwwfHx8fHw%3D",
    text: "Partnering with best-in-class technology is critical to both our and our clients’, success. That’s why we value our partnership with REVIEWS.io so greatly. As a platform, their social proofing tools are seriously impressive and are proven to boost sales and build lasting customer loyalty. As a partner, the REVIEWS.io team is super knowledgeable. ",
  },
  {
    id: 3,
    name: "Chandler Bing",
    job: "Developer",
    img: "https://plus.unsplash.com/premium_photo-1710459650163-2929d2ab1660?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Partnering with best-in-class technology is critical to both our and our clients’, success. That’s why we value our partnership with REVIEWS.io so greatly. As a platform, their social proofing tools are seriously impressive and are proven to boost sales and build lasting customer loyalty. As a partner, the REVIEWS.io team is super knowledgeable. ",
  },
  {
    id: 4,
    name: "Joey Tribiani",
    job: "UI/UX Designer",
    img: "https://images.unsplash.com/photo-1710196598764-909ba51da3c2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMzl8fHxlbnwwfHx8fHw%3D",
    text: "Partnering with best-in-class technology is critical to both our and our clients’, success. That’s why we value our partnership with REVIEWS.io so greatly. As a platform, their social proofing tools are seriously impressive and are proven to boost sales and build lasting customer loyalty. As a partner, the REVIEWS.io team is super knowledgeable. ",
  },
  {
    id: 5,
    name: "Monica Geller",
    job: "Team Lead@ CodeGemini",
    img: "https://images.unsplash.com/photo-1710156762268-702a4829ea8f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNTh8fHxlbnwwfHx8fHw%3D",
    text: "... unbelievable customer service too, just spent an hour on chat with Dan and he got everything up and running for us in no time and fixed an error in our product catalogue!",
  },
  {
    id: 6,
    name: "Rechel Green ",
    job: "Hotel Manager",
    img: "https://images.unsplash.com/photo-1710065574754-64313df9b60e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzODd8fHxlbnwwfHx8fHw%3D",
    text: "Partnering with best-in-class technology is critical to both our and our clients’, success. That’s why we value our partnership with REVIEWS.io so greatly. As a platform, their social proofing tools are seriously impressive and are proven to boost sales and build lasting customer loyalty. As a partner, the REVIEWS.io team is super knowledgeable. ",
  },
];

const img = document.getElementById("person-img");

const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const surpriseBtn = document.querySelector(".random-btn");

let currentItem = 0;

// Load initial item

window.addEventListener("DOMContentLoaded", () => {
  displayPersonInfo(currentItem);
});

nextBtn.addEventListener("click", () => {
  currentItem++;

  if (currentItem > reviewsList.length - 1) {
    currentItem = 0;
  }
  displayPersonInfo(currentItem);
});

prevBtn.addEventListener("click", () => {
  currentItem--;

  if (currentItem < 0) {
    currentItem = reviewsList.length - 1;
  }
  displayPersonInfo(currentItem);
});

surpriseBtn.addEventListener("click", () => {
  currentItem = getRandomValue();
  displayPersonInfo(currentItem);
});

// Show Person Info based on current Item
function displayPersonInfo(person) {
  const item = reviewsList[person];

  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

// Get random value

function getRandomValue() {
  return Math.floor(Math.random() * reviewsList.length);
}
