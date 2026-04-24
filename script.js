// Carousel Data (Our Focus)
const carouselData = [
  { img: "images/img1.png", text: "From our place to your face" },
  { img: "images/img2.png", text: "Powered by tech" },
  { img: "images/img3.png", text: "Eyewear for every pocket" },
  { img: "images/img4.png", text: "Full service optometry" },

];


// Cards Data (Our Vision / For Everyone)
const cardData = [
  { img: "images/img5.png", title: "Online", text: "Try over 1000 styles at home" },
  { img: "images/img6.png", title: "In Stores", text: "900+ stores across India" },
  { img: "images/img7.png", title: "At Home", text: "Free home eye test" }
];

let currentIndex = 0;
const visibleCards = 3; // number of cards visible

function crawsel() {
  const track = document.querySelector(".carousel-track");
  const dotsContainer = document.querySelector(".dots");

  track.innerHTML = "";
  dotsContainer.innerHTML = "";

  // Show visible cards
  for (let i = currentIndex; i < currentIndex + visibleCards; i++) {
    let index = i % carouselData.length;

    let card = document.createElement("div");
    card.classList.add("slide-card");

    card.innerHTML = `
      <img src="${carouselData[index].img}" class="slide-img">
      <p class="slide-text">${carouselData[index].text}</p>
    `;

    track.appendChild(card);
  }

  // Create dots
  for (let i = 0; i < carouselData.length; i++) {
    let dot = document.createElement("span");
    dot.classList.add("dot");

    if (i === currentIndex) {
      dot.classList.add("active");
    }

    dot.addEventListener("click", () => {
      currentIndex = i;
      crawsel();
    });

    dotsContainer.appendChild(dot);
  }
}


document.querySelector(".next-btn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % carouselData.length;
  crawsel();
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  currentIndex =
    (currentIndex - 1 + carouselData.length) % carouselData.length;
  crawsel();
});


function renderCards() {
  const container = document.querySelector(".cards-container");

  cardData.forEach((item) => {
    let card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${item.img}" class="card-img">
      <h3 class="card-title">${item.title}</h3>
      <p class="card-text">${item.text}</p>
    `;

    container.appendChild(card);
  });
}


crawsel();
renderCards();