
window.addEventListener("scroll", function () {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("sticky", window.scrollY > 0);
});

const navToggler = document.querySelector(".navbar__toggler");
const navTogglerBurger = document.querySelector(".navbar__toggler-burger");
const navBar = document.querySelector(".navbar__menu");

window.addEventListener('scroll', () => {
  const returnHome = document.querySelector('.returnHome');
  returnHome.classList.toggle("active", window.scrollY > 464);
})




// ! Adding an event listenter to the burger so that it can transform into an X and open the menu
navToggler.addEventListener('click', () => {
  navTogglerBurger.classList.toggle("open");
  navBar.classList.toggle("active");
// ! Adding an event listenter to the entire menu so that wherever the user clicks both the burger and the menu can be closed 
  navBar.addEventListener("mouseup", () => {
    navTogglerBurger.classList.remove("open");
    navBar.classList.remove("active");
  });
})


// // ?  PHP Message Start
// const messagePopup = document.querySelectorAll(".sentMessage");


// // ! Closing the popupMessage
// document.querySelector('.fa-times-circle').addEventListener('click', () => {
//     messagePopup[0].style.display = 'none';
// })


// //? PHP Message
// if (window.history.replaceState) {
//     window.history.replaceState(null, null, window.location.href);
// }


// ! Adding eventListeners to client templates and redirecting to relevant page
const item1 = document.querySelectorAll(".item-1");
const item2 = document.querySelectorAll(".item-2");
const item3 = document.querySelectorAll(".item-3");
const item4 = document.querySelectorAll(".item-4");
const item5 = document.querySelectorAll(".item-5");
const item6 = document.querySelectorAll(".item-6");


item1.forEach(el => {
  el.addEventListener('click', () => {
    window.location.href='/natours.html'
  }
  )
})

item2.forEach((el) => {
  el.addEventListener("click", () => {
    window.location.href = "/omnifood.html";
  });
});
item3.forEach((el) => {
  el.addEventListener("click", () => {
    window.location.href = "/cuisine.html";
  });
});

item4.forEach((el) => {
  el.addEventListener("click", () => {
    window.location.href = "/ayesha.html";
  });
});
item5.forEach((el) => {
  el.addEventListener("click", () => {
    window.location.href = "/trello.html";
  });
});
item6.forEach((el) => {
  el.addEventListener("click", () => {
    window.location.href = "/madAboutFurniture.html";
  });
});

// ! Adding eventListeners to client templates End


// ! Closing the popupMessage
const sentMsg = document.querySelector('.sentMessage');

console.log(sentMsg);
sentMsg.addEventListener('click', () => {
  sentMsg.classList.remove('active');
  
})

//! PHP Message
if (window.history.replaceState) {
    window.history.replaceState(null, null, window.location.href);
}
