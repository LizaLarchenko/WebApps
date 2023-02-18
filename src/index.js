import "./styles/styles.scss";

let toggleBtn = document.getElementById("toggle-btn");
let hiddenMenu = document.getElementById("hidden-menu");
let hiddenMenuLinks = document.querySelectorAll(".hidden-menu__link");

toggleBtn.addEventListener("click", () => {
  hiddenMenu.classList.toggle("active");
  toggleBtn.classList.toggle("active");
});

hiddenMenuLinks.forEach((item) => {
  item.addEventListener("click", () => {
    hiddenMenu.classList.remove("active");
    toggleBtn.classList.toggle("active");
  });
});

// const heroCta = document.querySelector('.hero__cta');
// heroCta.addEventListener('click' , function scrollTo(contacts){
//     alert('Hire me');
// });

// const heroCta = document.querySelector('.hero__cta');
// const contacts = document.querySelector('.contacts');
// function scrollTo(element) {
//     window.scroll({
//         // behavior: 'smooth',
//         left: 0,
//         top: element.offsetTop
//     });
// };

const heroCta = document.querySelector(".hero__cta");

heroCta.addEventListener("click", () => {
  location.href = "#contacts";
});

const form = document.querySelector(".contacts__form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  let formData = event.target;
  let data = {
    email: formData[0].value,
    phone: formData[1].value,
    message: formData[2].value,
  };

  console.log(data);
});

// const emailInput = document.getElementById('email');
// let emailData = null
// emailInput.addEventListener('change', (event) => {
//     emailData = event.target.value
// });

const clickBtn = document.getElementById("message");
clickBtn.addEventListener("click", () => {
  alert(emailData);
});

const navLink = document.getElementById("nav-link");
navLink.addEventListener("mouseenter", () => {
  navLink.style.color = "red";
});
navLink.addEventListener("mouseout", () => {
  navLink.style.color = "purple";
});

//Домашка

const winter = document.getElementById("winter");
winter.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  console.log(
    "Зима - самая холодная пора года. Но зимой получаются атмосферные фото!"
  );
});

const portfolio = document.getElementById("nav_portfolio");
portfolio.addEventListener("mousedown", () => {
  console.log("Вы нажали на кнопку , поздравляю!");
});
portfolio.addEventListener("mouseup", () => {
  console.log("А теперь, вы отжали кнопку!");
});

const header = document.querySelector(".header");
header.addEventListener("mousemove", () => {
  console.log("Вы двигаете мышкой по главной странице");
});

document.addEventListener("keydown", (e) => {
  console.log(`Нажата клавиша ${e.code} (${e.key})`);
});

document.addEventListener("keyup", (e) => {
  console.log(`Отжата клавиша ${e.code} (${e.key})`);
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("Дом загружен!");
});

// btnOrder.addEventListener('transitionend', () => {
//     btnOrder.style.backgroundColor = 'purple';
// });

const phone = document.getElementById("phone"); //phone.addEventListener('blur', function()
phone.onblur = function () {
  let phoneValue = this.value;
  if (phoneValue.includes("+")) {
    console.log("Верный тел");
  } else {
    console.log("Вроде не верно))");
  }
};
