const hamburger = document.querySelector(".hamburger-bar");
const navigation = document.querySelector(".navigation");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigation.classList.toggle("show");
});
