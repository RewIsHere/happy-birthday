const giftScreen = document.getElementById("gift-screen");
const birthdayScreen = document.getElementById("birthday-screen");
const letterScreen = document.getElementById("letter-screen");
const gift = document.getElementById("gift");
const openLetter = document.getElementById("open-letter");
const card = document.getElementById("card");
const music = document.getElementById("bg-music");

// 🎵 reproducir música al hacer clic en el regalo
gift.addEventListener("click", () => {
  music.play();
  giftScreen.classList.add("hidden");
  setTimeout(() => {
    birthdayScreen.classList.remove("hidden");
  }, 1000);
});

// 🎂 mostrar carta
openLetter.addEventListener("click", () => {
  birthdayScreen.classList.add("hidden");
  setTimeout(() => {
    letterScreen.classList.remove("hidden");
  }, 1000);
});

card.addEventListener("click", () => {
  card.classList.toggle("open");
});

// soporte móvil
card.addEventListener("touchstart", () => {
  card.classList.toggle("open");
});
