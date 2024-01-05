// Add The Active Text For menu
document.getElementById("menu").addEventListener("click", function (event) {
  let menuItems = document.querySelectorAll("#menu li a");
  menuItems.forEach((item) => item.classList.remove("active"));

  if (event.target.tagName === "A") {
    event.target.classList.add("active");
  }
});

// Optamize Menu
let menuIcon = document.querySelector("#menu-icon");
let list = document.querySelector("#menu");

menuIcon.onclick = () => {
  list.classList.toggle("menu-active");
  menuIcon.classList.toggle("fa-x");
};

// animated-text Animation
function animateText() {
  var animatedText = document.getElementById("animated-text");
  var textContent = animatedText.textContent;
  animatedText.textContent = "";

  for (var i = 0; i < textContent.length; i++) {
    setTimeout(
      (function (index) {
        return function () {
          animatedText.textContent += textContent[index];
        };
      })(i),
      i * 150
    );
  }
}
animateText();
setInterval(animateText, 7000);

// Go Top
function scrollToTop() {
  window.scrollTo({
    top: 0,
  });
}

document.getElementById("toTop").addEventListener("click", scrollToTop);

// Lang Menu

let langIcon = document.getElementById("lang-icon");
let langList = document.getElementById("ul-lang");

langIcon.onclick = () => {
  langList.classList.toggle("active");
};

let ar = document.getElementById("ar");
let tr = document.getElementById("tr");

ar.onclick = function () {
  window.location.href = "index-ar.html";
};

tr.onclick = function () {
  window.location.href = "index.html";
};
