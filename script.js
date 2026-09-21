const petals = document.getElementById("petals");
const flowerBtn = document.getElementById("flowerBtn");
const garden = document.getElementById("garden");
const letterBtn = document.getElementById("letterBtn");
const modal = document.getElementById("letterModal");
const closeModal = document.getElementById("closeModal");
const heartBtn = document.getElementById("heartBtn");
const counter = document.getElementById("counter");

let hearts = 0;

function createPetal() {
  const petal = document.createElement("div");
  petal.className = "petal";
  petal.textContent = Math.random() > 0.25 ? "🌼" : "🌻";

  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = (12 + Math.random() * 18) + "px";
  petal.style.animationDuration = (5 + Math.random() * 6) + "s";
  petal.style.setProperty("--drift", (-120 + Math.random() * 240) + "px");

  petals.appendChild(petal);
  setTimeout(() => petal.remove(), 12000);
}

setInterval(createPetal, 450);

flowerBtn.addEventListener("click", () => {
  garden.scrollIntoView({ behavior: "smooth" });

  for (let i = 0; i < 18; i++) {
    setTimeout(createPetal, i * 80);
  }
});

function openLetter() {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");
}

function closeLetter() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
}

letterBtn.addEventListener("click", openLetter);
closeModal.addEventListener("click", closeLetter);

modal.addEventListener("click", (event) => {
  if (event.target === modal) closeLetter();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeLetter();
});

heartBtn.addEventListener("click", () => {
  hearts++;
  counter.textContent = hearts === 1
    ? "1 corazón enviado ❤️"
    : `${hearts} corazones enviados ❤️`;

  for (let i = 0; i < 7; i++) {
    setTimeout(() => {
      const heart = document.createElement("div");
      heart.className = "petal";
      heart.textContent = "❤️";
      heart.style.left = (45 + Math.random() * 10) + "vw";
      heart.style.top = "70vh";
      heart.style.fontSize = (16 + Math.random() * 15) + "px";
      heart.style.animationDuration = (2 + Math.random() * 2) + "s";
      heart.style.setProperty("--drift", (-100 + Math.random() * 200) + "px");
      petals.appendChild(heart);
      setTimeout(() => heart.remove(), 4500);
    }, i * 100);
  }
});

// Primera lluvia suave al cargar
for (let i = 0; i < 8; i++) {
  setTimeout(createPetal, i * 180);
}
